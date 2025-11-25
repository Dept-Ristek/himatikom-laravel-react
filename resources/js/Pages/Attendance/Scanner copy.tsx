import React, { useEffect, useState, useRef } from 'react';
import { Head, router } from '@inertiajs/react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';
import Swal from 'sweetalert2';
import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';

// Waktu maksimal menunggu lokasi (15 detik)
const LOCATION_TIMEOUT = 15000;

export default function Scanner({ auth }: PageProps) {
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);

    const [scanResult, setScanResult] = useState<string | null>(null);
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [locationError, setLocationError] = useState<string | null>(null);
    const [locationStatus, setLocationStatus] = useState<string>('Mencari lokasi Anda...');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    // useEffect untuk mengambil lokasi
    useEffect(() => {
        if (!navigator.geolocation) {
            const msg = 'Geolocation tidak didukung oleh browser Anda.';
            setLocationError(msg);
            setLocationStatus('Error');
            Swal.fire('Error Lokasi', msg, 'error');
            return;
        }

        const options = {
            enableHighAccuracy: true,
            timeout: LOCATION_TIMEOUT,
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                setLocationStatus('Lokasi berhasil ditemukan. Siap untuk memindai.');
                setLocationError(null);
            },
            (error) => {
                let message = "Terjadi kesalahan saat mengambil lokasi.";
                if (error.code === error.PERMISSION_DENIED) {
                    message = "Anda harus memberikan izin akses lokasi untuk situs ini.";
                } else if (error.code === error.POSITION_UNAVAILABLE) {
                    message = "Informasi lokasi tidak tersedia saat ini. Pastikan GPS aktif.";
                } else if (error.code === error.TIMEOUT) {
                    message = "Waktu permintaan lokasi habis. Coba lagi.";
                }
                setLocationError(message);
                setLocationStatus('Error');
                Swal.fire('Error Lokasi', message, 'error');
            },
            options
        );
    }, []);

    // useEffect untuk inisialisasi scanner
    useEffect(() => {
        if (!location || scannerRef.current || isProcessing) {
            return;
        }

        const scanner = new Html5QrcodeScanner(
            'qr-reader',
            {
                qrbox: { width: 250, height: 250 },
                fps: 10,
            },
            false
        );

        const onScanSuccess = (decodedText: string) => {
            if (scannerRef.current) {
                scannerRef.current.clear();
                scannerRef.current = null;
            }
            setScanResult(decodedText);
        };

        const onScanError = (errorMessage: string) => {
            // Abaikan error
        };

        scanner.render(onScanSuccess, onScanError);
        scannerRef.current = scanner;

        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear().catch(error => {
                    console.error("Gagal membersihkan scanner.", error);
                });
            }
        };
    }, [location, isProcessing]);

    // useEffect untuk memproses hasil scan
    useEffect(() => {
        if (!scanResult) return;

        const processScan = async (result: string) => {
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
                    latitude: location?.latitude, // Kirim latitude
                    longitude: location?.longitude, // Kirim longitude
                });

                Swal.fire({ icon: 'success', title: 'Berhasil!', text: response.data.message });
                setTimeout(() => router.get(route('v2.reports.user')), 2000);

            } catch (error: any) {
                let errorMessage = 'Terjadi kesalahan. Silakan coba lagi.';
                if (error.response) {
                    errorMessage = error.response.data.message;
                } else if (error instanceof Error) {
                    errorMessage = error.message;
                }
                Swal.fire({ icon: 'error', title: 'Oops...', text: errorMessage });

                setTimeout(() => {
                    setScanResult(null);
                    setIsProcessing(false);
                }, 3000);
            }
        };

        if (location) {
            processScan(scanResult);
        } else {
            Swal.fire({ icon: 'error', title: 'Lokasi Tidak Ditemukan', text: 'Tidak dapat memproses absensi tanpa lokasi.' });
            setIsProcessing(false);
        }
    }, [scanResult, location]);

    return (
        <MainLayout>
            <Head title="Absensi Scanner" />
            <div className="py-12">
                <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                    {locationError && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">{locationError}</div>}
                    {!locationError && (
                        <div className={`p-4 mb-4 text-sm rounded-lg ${location ? 'text-green-700 bg-green-100' : 'text-blue-700 bg-blue-100'}`}>
                            {locationStatus}
                        </div>
                    )}

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="text-center text-gray-700 mb-4">
                            <p>Arahkan kamera Anda ke QR Code yang ditampilkan.</p>
                        </div>
                        <div className="w-full max-w-md mx-auto">
                            {location && !scanResult ? (
                                <div id="qr-reader"></div>
                            ) : (
                                <div className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 text-center px-4">
                                        {scanResult ? 'Memproses hasil pindaian...' : 'Menunggu lokasi untuk memulai kamera...'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
