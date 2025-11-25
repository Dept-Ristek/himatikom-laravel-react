import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { PageProps, Event, Attendance } from '@/types'; // Pastikan Attendance diimpor jika belum
import { Button } from '@/Components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/Components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/Components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ShowEvent({ auth, event }: PageProps<{ event: Event }>) {
    // PERBAIKAN: Gunakan nullish coalescing operator (??) untuk menyediakan array kosong sebagai default.
    const attendances = event.attendances ?? [];

    const chartData = attendances
        .map(att => new Date(att.attended_at).getMinutes())
        .reduce((acc, minute) => {
            const interval = Math.floor(minute / 5) * 5;
            acc[interval] = (acc[interval] || 0) + 1;
            return acc;
        }, {} as Record<number, number>);

    const formattedChartData = Object.keys(chartData).map(key => ({
        time: `menit ${key}-${parseInt(key) + 4}`,
        peserta: chartData[parseInt(key)],
    }));

    return (
        <MainLayout>
            <Head title={`Detail Event: ${event.name}`} />

            <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-2xl">{event.name}</CardTitle>
                                <CardDescription>{event.location}</CardDescription>
                                <CardDescription>
                                    {new Date(event.start_time).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })} - {new Date(event.end_time).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })}
                                </CardDescription>
                            </div>
                            <div className="flex space-x-2">
                                <Link href={route('admin.events.qr', event.id)}><Button>Lihat QR</Button></Link>
                                <Link href={route('admin.events.edit', event.id)}><Button variant="secondary">Edit</Button></Link>
                                <a href={route('admin.reports.export.excel', event.id)}><Button>Export Excel</Button></a>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 whitespace-pre-wrap">{event.description || 'Tidak ada deskripsi.'}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Grafik Kehadiran</CardTitle>
                        <CardDescription>Jumlah peserta yang hadir per interval 5 menit.</CardDescription>
                    </CardHeader>
                    <CardContent style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={formattedChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="peserta" fill="#8884d8" name="Jumlah Peserta"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Kehadiran</CardTitle>
                        <CardDescription>
                            {/* PERBAIKAN: Gunakan variabel 'attendances' yang aman */}
                            Total peserta yang hadir: {attendances.length} orang
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nama Peserta</TableHead>
                                    <TableHead>NIM</TableHead>
                                    <TableHead>Waktu Absen</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {/* PERBAIKAN: Gunakan variabel 'attendances' yang aman */}
                                {attendances.length > 0 ? (
                                    attendances.map((attendance) => (
                                        <TableRow key={attendance.id}>
                                            <TableCell className="font-medium">{attendance.user.name}</TableCell>
                                            <TableCell>{attendance.user.nim}</TableCell>
                                            <TableCell>{new Date(attendance.attended_at).toLocaleTimeString('id-ID')}</TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-center">Belum ada peserta yang hadir.</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="mt-6">
                    <Link href={route('admin.events.index')}>
                        <Button variant="outline">Kembali ke Daftar Event</Button>
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
}
