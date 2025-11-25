import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Head, router } from '@inertiajs/react';
// 1. GANTI IMPORT: Gunakan 'Html5Qrcode' (headless) bukan 'Html5QrcodeScanner' (UI)
import {
    Html5Qrcode,
    Html5QrcodeResult,
    Html5QrcodeSupportedFormats,
    CameraDevice as Html5CameraDevice // Impor tipe data kamera
} from 'html5-qrcode';
import axios from 'axios';
import Swal from 'sweetalert2';
import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import { Camera, Image, Smartphone, Video, AlertCircle, Search, Upload, RotateCw, MapPin } from 'lucide-react';

// Waktu maksimal menunggu lokasi (15 detik)
const LOCATION_TIMEOUT = 15000;
// ID untuk div tempat video akan di-render
const SCANNER_REGION_ID = "headless-qr-reader";

// Tipe data untuk status
type LocationStatus = 'idle' | 'requesting' | 'granted' | 'denied' | 'error';
// Tipe data untuk kamera (lebih spesifik)
type CameraDevice = { id: string; label: string; facing: 'front' | 'back' | 'unknown' };

export default function Scanner({ auth }: PageProps) {
    // 2. BUAT REF UNTUK INSTANCE SCANNER
    const html5QrCodeRef = useRef<Html5Qrcode | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // State untuk hasil scan dan status
    const [scanResult, setScanResult] = useState<string | null>(null);
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [locationStatus, setLocationStatus] = useState<LocationStatus>('idle');
    const [locationError, setLocationError] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    // State baru untuk UI kustom
    const [scanMode, setScanMode] = useState<'camera' | 'gallery'>('camera');
    const [cameras, setCameras] = useState<CameraDevice[]>([]);
    const [selectedCameraId, setSelectedCameraId] = useState<string | null>(null);
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
    const [isScannerLoading, setIsScannerLoading] = useState(false);

    // --- 1. LOGIKA LOKASI (Tidak berubah) ---
    const requestLocationPermission = useCallback(() => {
        setLocationStatus('requesting');
        if (!navigator.geolocation) {
            const msg = 'Geolocation tidak didukung oleh browser Anda.';
            setLocationError(msg);
            setLocationStatus('error');
            Swal.fire('Error Lokasi', msg, 'error');
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                setLocationStatus('granted');
                setLocationError(null);
            },
            (error) => {
                let message = "Terjadi kesalahan saat mengambil lokasi.";
                if (error.code === error.PERMISSION_DENIED) message = "Anda harus memberikan izin akses lokasi.";
                else if (error.code === error.POSITION_UNAVAILABLE) message = "Informasi lokasi tidak tersedia. Pastikan GPS aktif.";
                else if (error.code === error.TIMEOUT) message = "Waktu permintaan lokasi habis.";
                setLocationError(message);
                setLocationStatus('error');
                Swal.fire('Error Lokasi', message, 'error');
            },
            { enableHighAccuracy: true, timeout: LOCATION_TIMEOUT, maximumAge: 0 }
        );
    }, []);

    useEffect(() => {
        requestLocationPermission();
    }, [requestLocationPermission]);

    // --- 2. LOGIKA PROSES SCAN (Tidak berubah) ---
    const processScanResult = useCallback(async (result: string) => {
        if (!location) {
            Swal.fire({ icon: 'error', title: 'Lokasi Tidak Ditemukan', text: 'Tidak dapat memproses absensi tanpa lokasi.' });
            setIsProcessing(false);
            setScanResult(null); // Reset scan
            return;
        }

        setIsProcessing(true);
        Swal.fire({
            title: 'Memproses...',
            text: 'Mencatat kehadiran Anda...',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });

        try {
            const url = new URL(result);
            const token = url.pathname.split('/').pop() || '';
            if (!token) throw new Error('Format QR Code tidak valid.');

            const response = await axios.post(route('v2.attendance.record'), {
                token,
                latitude: location?.latitude,
                longitude: location?.longitude,
            });

            Swal.fire({ icon: 'success', title: 'Berhasil!', text: response.data.message });
            setTimeout(() => router.get(route('v2.reports.user')), 2000);

        } catch (error: any) {
            let errorMessage = 'Terjadi kesalahan. Silakan coba lagi.';
            if (error.response) errorMessage = error.response.data.message;
            else if (error instanceof Error) errorMessage = error.message;

            Swal.fire({ icon: 'error', title: 'Oops...', text: errorMessage });
            // Reset agar bisa scan lagi
            setTimeout(() => {
                setScanResult(null);
                setIsProcessing(false);
            }, 3000);
        }
    }, [location]); // Dependensi hanya pada location

    useEffect(() => {
        if (scanResult && !isProcessing) {
            processScanResult(scanResult);
        }
    }, [scanResult, isProcessing, processScanResult]);


    // --- 3. LOGIKA SCANNER (BARU & KUSTOM) ---

    // Menghentikan scanner
    const stopScanner = useCallback(async () => {
        // Cek jika ada instance DAN kita tidak sedang dalam transisi
        if (html5QrCodeRef.current && !isScannerLoading) {
            setIsScannerLoading(true); // Tandai kita sedang transisi
            try {
                // Panggil stop() di dalam try-catch
                await html5QrCodeRef.current.stop();
                html5QrCodeRef.current = null;
                setIsScannerLoading(false);
            } catch (err) {
                // console.error("Gagal menghentikan scanner:", err); // Ini error yang Anda lihat
                // Paksa reset state meskipun gagal
                html5QrCodeRef.current = null;
                setIsScannerLoading(false);
            }
        }
    }, [isScannerLoading]); // Hanya bergantung pada isScannerLoading

    // Memulai scanner
    // Memulai scanner
    const startScanner = useCallback(async (deviceId: string) => {
        // (SOLUSI ERROR 2) Pastikan DOM siap
        if (!document.getElementById(SCANNER_REGION_ID)) {
            console.warn("startScanner dipanggil tetapi DOM belum siap.");
            return; // Keluar, useEffect akan mencoba lagi
        }

        // (SOLUSI ERROR 1) Pastikan tidak ada instance lain atau transisi
        if (html5QrCodeRef.current || isScannerLoading) {
            return;
        }

        setIsScannerLoading(true);

        const newScanner = new Html5Qrcode(SCANNER_REGION_ID, { verbose: false });
        html5QrCodeRef.current = newScanner;

        const onScanSuccess = (decodedText: string) => {
            if (isProcessing) return;
            setScanResult(decodedText);
            // stopScanner() akan dipanggil oleh useEffect utama
            // Kita tidak menaruh Swal 'sukses' di sini, karena 'processScanResult'
            // akan langsung menampilkan Swal 'Memproses...'
        };

        const onScanError = (errorMessage: string, error: any) => { /* Abaikan */ };

        try {
            await newScanner.start(
                deviceId,
                {
                    qrbox: { width: 250, height: 250 },
                    fps: 10,
                    aspectRatio: 1.0
                },
                onScanSuccess,
                onScanError
            );
            setIsScannerLoading(false);
            setHasCameraPermission(true);
        } catch (error: any) {
            // console.error("Gagal memulai kamera:", error);
            setIsScannerLoading(false);
            setHasCameraPermission(false);
            html5QrCodeRef.current = null; // Gagal start, hapus ref

            // --- PERUBAHAN DI SINI ---
            // Tentukan pesan error yang lebih baik
            let errorMsg = "Gagal memulai kamera.";
            if (error && typeof error === 'object' && 'name' in error) {
                 if (error.name === 'NotAllowedError') {
                    errorMsg = 'Izin kamera ditolak. Harap izinkan di pengaturan browser Anda.';
                 } else if (error.name === 'NotFoundError') {
                     errorMsg = 'Kamera tidak ditemukan di perangkat ini.';
                 } else if (error.name === 'NotReadableError') {
                     errorMsg = 'Kamera sedang digunakan oleh aplikasi lain.';
                 }
            }

            // Set state untuk UI statis
            setLocationError(errorMsg);

            // Tampilkan SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Kamera Gagal',
                text: errorMsg,
            });
            // --- AKHIR PERUBAHAN ---
        }
    }, [isScannerLoading, isProcessing]);

    // Mengambil daftar kamera (hanya sekali)
    useEffect(() => {
        if (locationStatus === 'granted' && cameras.length === 0) {
            Html5Qrcode.getCameras().then((devices: Html5CameraDevice[]) => {
                if (devices && devices.length) {
                    const videoDevices = devices.map(device => {
                        const facing: 'front' | 'back' | 'unknown' =
                            /back|environment/i.test(device.label) ? 'back' :
                            /front|user/i.test(device.label) ? 'front' : 'unknown';
                        return { id: device.id, label: device.label, facing };
                    });

                    setCameras(videoDevices);
                    setHasCameraPermission(true);

                    // Otomatis pilih kamera belakang, jika tidak ada, pilih yang pertama
                    const backCamera = videoDevices.find(c => c.facing === 'back');
                    setSelectedCameraId(backCamera ? backCamera.id : videoDevices[0].id);
                }
            }).catch(err => {
                setHasCameraPermission(false);
                setLocationError("Tidak dapat mengakses kamera. Harap berikan izin.");
            });
        }
    }, [locationStatus, cameras.length]);

    // Effect untuk start/stop scanner saat state berubah
    // GANTI useEffect ke-3 Anda dengan ini
    useEffect(() => {
        // 1. (SOLUSI ERROR 2) Cek DOM
        // Jika kita mode kamera TAPI div-nya tidak ada, jangan lakukan apa-apa.
        // React akan re-render, dan effect ini akan jalan lagi nanti.
        if (scanMode === 'camera' && !document.getElementById(SCANNER_REGION_ID)) {
            return;
        }

        // 2. Tentukan Aksi (SOLUSI ERROR 1)
        const shouldStart = scanMode === 'camera' &&
                            selectedCameraId &&
                            !isProcessing &&
                            !scanResult;

        if (shouldStart) {
            // Cek jika scanner BELUM berjalan
            if (!html5QrCodeRef.current) {
                startScanner(selectedCameraId);
            }
        } else {
            // Cek jika scanner SEDANG berjalan
            if (html5QrCodeRef.current) {
                stopScanner();
            }
        }

        // 3. Cleanup
        return () => {
            // Cleanup HANYA panggil stopScanner.
            // stopScanner sudah punya logic pengaman di dalamnya.
            stopScanner();
        };
    }, [
        scanMode,
        selectedCameraId,
        isProcessing,
        scanResult,
        startScanner, // Callback harus ada di dependensi
        stopScanner  // Callback harus ada di dependensi
    ]);

    // --- 4. HANDLER UI KUSTOM (BARU) ---

    // Ganti kamera
    const handleCameraSwitch = () => {
        if (cameras.length <= 1) return;
        const currentIndex = cameras.findIndex(c => c.id === selectedCameraId);
        const nextIndex = (currentIndex + 1) % cameras.length;
        setSelectedCameraId(cameras[nextIndex].id);
    };

    // Scan dari file galeri
    const handleFileScan = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        // 1. Cek file DAN cek apakah sudah ada proses berjalan
        if (!file || isProcessing) return;

        // 2. Buat instance scanner file lokal
        const fileScanner = new Html5Qrcode("file-scanner-region", { verbose: false });

        try {
            // 3. Scan file
            const decodedText = await fileScanner.scanFile(file, false);

            // 4. HANYA set hasil. JANGAN set processing atau tampilkan Swal.
            setScanResult(decodedText);

        } catch (err: any) {
            // 5. Jika GAGAL scan file, baru tampilkan Swal error
            Swal.fire('Gagal', 'Tidak dapat menemukan QR Code di dalam gambar.', 'error');
            // Kita tidak perlu 'setIsProcessing(false)' karena kita tidak pernah mengaturnya
        } finally {
            // 6. Selalu bersihkan instance file scanner
            fileScanner.clear();
        }

        // Reset file input
        e.target.value = '';
    };

    // --- 5. RENDER KOMPONEN ---

    // UI untuk status lokasi
    const LocationStatusUI = () => {
        if (locationStatus === 'granted') {
            return (
                <div className="p-4 mb-4 text-sm rounded-lg text-green-700 bg-green-100">
                    Lokasi berhasil ditemukan. Siap memindai.
                </div>
            );
        }
        if (locationStatus === 'error') {
            return (
                <div className="p-4 mb-4 text-sm rounded-lg text-red-700 bg-red-100">
                    <strong>Error:</strong> {locationError}
                </div>
            );
        }
        return (
            <div className="p-4 mb-4 text-sm rounded-lg text-blue-700 bg-blue-100">
                Mencari lokasi Anda...
            </div>
        );
    };

    // UI untuk Tampilan Scanner
    const ScannerDisplay = () => {
        if (isProcessing || scanResult) {
             return (
                <div className="aspect-square flex flex-col items-center justify-center bg-gray-100 rounded-lg">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <p className="text-gray-500 text-center px-4 mt-4">
                        Memproses hasil pindaian...
                    </p>
                </div>
             );
        }

        if (!location) {
             return (
                <div className="aspect-square flex flex-col items-center justify-center bg-gray-100 rounded-lg">
                    <MapPin className="w-12 h-12 text-gray-400" />
                    <p className="text-gray-500 text-center px-4 mt-4">
                        Menunggu lokasi untuk memulai kamera...
                    </p>
                </div>
             );
        }

        if (hasCameraPermission === false) {
             return (
                <div className="aspect-square flex flex-col items-center justify-center bg-red-50 text-red-700 rounded-lg">
                    <AlertCircle className="w-12 h-12" />
                    <p className="text-center px-4 mt-4">
                        Izin kamera ditolak. Harap izinkan akses kamera di pengaturan browser Anda.
                    </p>
                </div>
             );
        }

        // Ini adalah div target 'headless'
        return (
            <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
                {/* 3. INI ADALAH DIV TARGET SCANNER. UI AKAN DI-INJECT DI SINI. */}
                <div id={SCANNER_REGION_ID} className="w-full h-full" />

                {isScannerLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
                    </div>
                )}

                {/* 4. TOMBOL KUSTOM DI ATAS VIDEO (UI KITA SENDIRI) */}
                {cameras.length > 1 && (
                    <button
                        onClick={handleCameraSwitch}
                        disabled={isScannerLoading || isProcessing}
                        className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white disabled:opacity-50 transition-opacity"
                        aria-label="Ganti Kamera"
                    >
                        <RotateCw className="w-5 h-5" />
                    </button>
                )}
            </div>
        );
    };

    return (
        <MainLayout>
            <Head title="Absensi Scanner" />
            <div id="file-scanner-region" style={{ display: 'none' }}></div>
            <div className="py-12">
                <div className="max-w-xl mx-auto sm:px-6 lg:px-8">

                    <LocationStatusUI />

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        {/* 5. KONTROL UI KUSTOM (TAB) */}
                        <div className="mb-4 flex bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setScanMode('camera')}
                                disabled={isProcessing}
                                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${scanMode === 'camera' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'} disabled:opacity-50`}
                            >
                                <Camera className="w-4 h-4 inline mr-2" />
                                Kamera
                            </button>
                            <button
                                onClick={() => setScanMode('gallery')}
                                disabled={isProcessing}
                                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${scanMode === 'gallery' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'} disabled:opacity-50`}
                            >
                                <Image className="w-4 h-4 inline mr-2" />
                                Galeri
                            </button>
                        </div>

                        {/* Tampilkan UI berdasarkan mode */}
                        {scanMode === 'camera' ? (
                            <ScannerDisplay />
                        ) : (
                            // 6. UI KUSTOM UNTUK UPLOAD GALERI
                            <div className="aspect-square flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6">
                                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                                <p className="text-gray-600 text-center mb-4">
                                    Pilih gambar QR Code dari galeri Anda.
                                </p>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileScan}
                                    className="hidden"
                                />
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={isProcessing}
                                    className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                                >
                                    Pilih Gambar
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
