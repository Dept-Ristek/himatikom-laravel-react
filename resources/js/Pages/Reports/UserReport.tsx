import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
// Pastikan semua tipe diimpor dengan benar
import { PageProps, PaginatedData, Attendance } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { Pagination, PaginationContent, PaginationItem } from '@/Components/ui/pagination';
import { Button } from '@/Components/ui/button';
import { QrCode } from 'lucide-react';

// Helper function (tidak ada perubahan)
const formatDateTime = (dateString: string, options: Intl.DateTimeFormatOptions): string => {
    return new Date(dateString).toLocaleString('id-ID', options);
};

export default function UserReport({ auth, attendances }: PageProps<{ attendances: PaginatedData<Attendance> }>) {
    return (
        // PERBAIKAN: Hapus props user & header
        <MainLayout>
            <Head title="Riwayat Absensi" />

            <div className="p-4 sm:p-6 lg:p-8">
                <Card className="shadow-lg">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle>Daftar Kehadiran Anda</CardTitle>
                                <CardDescription>
                                    Berikut adalah daftar semua acara yang pernah Anda hadiri.
                                </CardDescription>
                            </div>
                            <Link href={route('v2.attendance.scanner')}>
                                <Button>
                                    <QrCode className="mr-2 h-4 w-4" />
                                    Pindai QR Absen
                                </Button>
                            </Link>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="border rounded-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[40%]">Nama Event</TableHead>
                                        <TableHead>Tanggal Event</TableHead>
                                        <TableHead>Waktu Absen</TableHead>
                                        <TableHead className="text-center">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {attendances.data.length > 0 ? (
                                        attendances.data.map((att) => (
                                            <TableRow key={att.id} className="hover:bg-gray-50">
                                                {/* Tambahkan pengecekan opsional untuk 'event' */}
                                                <TableCell className="font-medium">{att.event?.name ?? '-'}</TableCell>
                                                <TableCell>
                                                    {att.event ? formatDateTime(att.event.start_time, {
                                                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                                                    }) : '-'}
                                                </TableCell>
                                                <TableCell>
                                                    {formatDateTime(att.attended_at, {
                                                        hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
                                                    })}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                                                        Hadir
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={4} className="h-24 text-center text-gray-500">
                                                Anda belum memiliki riwayat absensi.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>

                    {/* Bagian pagination sekarang seharusnya bekerja dengan benar */}
                    <CardFooter>
                        {attendances.links.length > 3 && (
                            <Pagination>
                                <PaginationContent>
                                    {attendances.links.map((link, index) => (
                                        <PaginationItem key={index}>
                                            <Link
                                                href={link.url || '#'}
                                                className={`
                                                    px-3 py-2 leading-tight border rounded-md mx-1
                                                    ${link.active ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'}
                                                    ${!link.url ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent'}
                                                `}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        </PaginationItem>
                                    ))}
                                </PaginationContent>
                            </Pagination>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </MainLayout>
    );
}
