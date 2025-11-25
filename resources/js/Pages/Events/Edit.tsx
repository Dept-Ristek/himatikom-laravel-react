// resources/js/Pages/Events/Edit.tsx
import { FormEventHandler, useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { PageProps, Event } from "@/types";
import InputError from "@/Components/InputError";
import { Loader2 } from "lucide-react"; // Icon untuk loading
import axios from "axios";

export default function EditEvent({ auth, event }: PageProps<{ event: Event }>) {
    const { toast } = useToast();
    // MODIFIKASI: Inisialisasi form dengan data event yang ada
    const { data, setData, put, errors, processing, recentlySuccessful, reset } = useForm({
        name: event.name || "",
        description: event.description || "",
        start_time: event.start_time ? event.start_time.slice(0, 16) : "", // Format untuk datetime-local
        end_time: event.end_time ? event.end_time.slice(0, 16) : "",
        location: event.location || "",
        latitude: event.latitude || "",
        longitude: event.longitude || "",
    });

    // BARU: State untuk loading saat mengambil lokasi
    const [isFetchingLocation, setIsFetchingLocation] = useState(false);

    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                variant: "default",
                title: "Event Baru",
                description: "Berhasil menambahkan data event baru!",
            });
            reset();
        }
    }, [recentlySuccessful]);

    const handleFetchCurrentLocation = () => {
        setIsFetchingLocation(true);

        if (!navigator.geolocation) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Geolocation tidak didukung oleh browser Anda.",
            });
            setIsFetchingLocation(false);
            return;
        }

        // 1. MEMINTA LOKASI DENGAN AKURASI TERTINGGI
        const options = {
            enableHighAccuracy: true, // Ini akan memaksa penggunaan GPS jika tersedia
            timeout: 10000,           // Waktu maksimal menunggu lokasi (10 detik)
            maximumAge: 0,            // Jangan gunakan cache lokasi
        };

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                // Update state form dengan koordinat
                setData(prevData => ({
                    ...prevData,
                    latitude: latitude.toFixed(7),  // Simpan dengan presisi tinggi
                    longitude: longitude.toFixed(7),
                }));

                // 2. MENGGUNAKAN API GEOAPIFY UNTUK REVERSE GEOCODING
                // Ganti YOUR_API_KEY dengan API key Anda jika sudah mendaftar,
                // tapi untuk testing, seringkali bisa berjalan tanpa key.
                // Untuk production, sangat disarankan mendaftar (gratis) di geoapify.com
                const GEOAPIFY_API_KEY = "0e9d2d516b2d49f7b08607826ab17d7d"; // <-- Ganti nanti jika perlu
                const reverseGeocodeUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${GEOAPIFY_API_KEY}`;

                try {
                    const response = await axios.get(reverseGeocodeUrl);

                    if (response.data.features.length > 0) {
                        const locationProperties = response.data.features[0].properties;
                        // Kita bisa merakit alamat yang lebih relevan
                        const address = locationProperties.formatted || locationProperties.address_line2 || "Lokasi tidak dikenal";

                        setData('location', address);
                        toast({
                            title: "Lokasi Ditemukan!",
                            description: `Akurasi: ${position.coords.accuracy.toFixed(0)} meter.`,
                        });
                    } else {
                        throw new Error("Tidak ada hasil dari Geoapify.");
                    }
                } catch (error) {
                    console.error("Geoapify Error:", error);
                    toast({
                        variant: "destructive",
                        title: "Gagal Mendapatkan Nama Lokasi",
                        description: "Koordinat berhasil didapat, tapi gagal mengambil nama lokasi.",
                    });
                } finally {
                    setIsFetchingLocation(false);
                }
            },
            (error) => {
                let message = "Terjadi kesalahan saat mengambil lokasi.";
                if (error.code === error.PERMISSION_DENIED) {
                    message = "Anda harus memberikan izin akses lokasi untuk menggunakan fitur ini.";
                } else if (error.code === error.POSITION_UNAVAILABLE) {
                    message = "Informasi lokasi tidak tersedia saat ini.";
                } else if (error.code === error.TIMEOUT) {
                    message = "Waktu permintaan lokasi habis. Coba lagi.";
                }

                toast({
                    variant: "destructive",
                    title: "Error Lokasi",
                    description: message,
                });
                setIsFetchingLocation(false);
            },
            options // Masukkan opsi akurasi tinggi di sini
        );
    };

    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                title: "Update Event",
                description: "Berhasil memperbarui data event!",
            });
        }
    }, [recentlySuccessful]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // MODIFIKASI: Gunakan method PUT ke route update
        put(route('admin.events.update', event.id));
    };

    return (
        <MainLayout>
            <Head title={`Edit Event: ${event.name}`} />
            <div className='p-4 sm:p-6 lg:p-8 max-w-xl mx-auto'>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-5">Form Edit Event</h1>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Nama Event</Label>
                            <Input
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="mt-1"
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div>
                            <Label htmlFor="description">Deskripsi</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="mt-1"
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </div>

                        {/* Field Waktu Mulai & Selesai */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="start_time">Waktu Mulai</Label>
                                <Input id="start_time" type="datetime-local" value={data.start_time} onChange={(e) => setData('start_time', e.target.value)} required />
                                <InputError message={errors.start_time} className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="end_time">Waktu Selesai</Label>
                                <Input id="end_time" type="datetime-local" value={data.end_time} onChange={(e) => setData('end_time', e.target.value)} required />
                                <InputError message={errors.end_time} className="mt-2" />
                            </div>
                        </div>

                        {/* Field Lokasi & Tombol Ambil Lokasi */}
                        <div>
                            <Label htmlFor="location">Lokasi</Label>
                            <div className="flex items-center gap-2 mt-1">
                                <Input
                                    id="location"
                                    name="location"
                                    value={data.location}
                                    onChange={(e) => setData('location', e.target.value)}
                                    className="flex-grow"
                                    required
                                    placeholder="Contoh: Gedung A, Universitas ..."
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleFetchCurrentLocation}
                                    disabled={isFetchingLocation}
                                >
                                    {isFetchingLocation ? (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    ) : (
                                        '📍'
                                    )}
                                    Ambil Lokasi
                                </Button>
                            </div>
                            <InputError message={errors.location} className="mt-2" />
                        </div>

                        {/* Field Latitude & Longitude */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="latitude">Latitude</Label>
                                <Input id="latitude" type="number" step="any" value={data.latitude} onChange={(e) => setData('latitude', e.target.value)} required placeholder="-6.9175" />
                                <InputError message={errors.latitude} className="mt-2" />
                            </div>
                            <div>
                                <Label htmlFor="longitude">Longitude</Label>
                                <Input id="longitude" type="number" step="any" value={data.longitude} onChange={(e) => setData('longitude', e.target.value)} required placeholder="107.6191" />
                                <InputError message={errors.longitude} className="mt-2" />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <Button type="submit" disabled={processing}>{processing ? 'Menyimpan...' : 'Update'}</Button>
                            <Link href={route('admin.events.show', event.id)} className="text-sm">Batal</Link>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
