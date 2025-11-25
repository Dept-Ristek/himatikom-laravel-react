import React from 'react';
import { Head } from '@inertiajs/react';
import QRCode from 'react-qr-code';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'; // Asumsi layout sudah ada
import MainLayout from '@/Layouts/MainLayout';
import { ShowQrProps, Event } from '@/types';

export default function ShowQr({ auth, event, attendanceUrl }: ShowQrProps) {
    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kode QR Absensi: {event.name}</h2>}
        // >
        <MainLayout>

            <Head title={`QR Code for ${event.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold mb-4">Pindai kode ini untuk absensi</h3>
                            <div className="p-4 bg-white rounded-lg">
                                <QRCode
                                    value={attendanceUrl}
                                    size={256}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    viewBox={`0 0 256 256`}
                                />
                            </div>
                            {/* <p className="mt-4 text-gray-600 text-sm">URL: {attendanceUrl}</p> */}
                            <p className="mt-2 text-red-500 font-semibold">PENTING: Jangan sebarkan URL ini.</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
