import { Head, Link, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { PageProps, PaginatedData, Event } from '@/types';
import { Button } from '@/Components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/Components/ui/table';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/Components/ui/alert-dialog';

export default function IndexEvents({ auth, events }: PageProps<{ events: PaginatedData<Event> }>) {

    const handleDelete = (eventId: number | string) => {
        // Route helper di Inertia cukup pintar untuk menangani keduanya
        router.delete(route('admin.events.destroy', eventId), {
            preserveScroll: true,
        });
    };

    return (
        <MainLayout>
            <Head title="Manajemen Event" />

            <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Daftar Event</h1>
                    <Link href={route('admin.events.create')}>
                        <Button>Buat Event Baru</Button>
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nama Event</TableHead>
                                <TableHead>Waktu Mulai</TableHead>
                                <TableHead>Waktu Selesai</TableHead>
                                <TableHead>Lokasi</TableHead>
                                <TableHead>Dibuat Oleh</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {events.data.length > 0 ? (
                                events.data.map((event) => (
                                    <TableRow key={event.id}>
                                        <TableCell className="font-medium">{event.name}</TableCell>
                                        <TableCell>{new Date(event.start_time).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })}</TableCell>
                                        <TableCell>{new Date(event.end_time).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })}</TableCell>
                                        <TableCell>{event.location}</TableCell>
                                        <TableCell>{event.creator.name}</TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Link href={route('admin.events.show', event.id)}><Button variant="outline" size="sm">Detail</Button></Link>
                                            <Link href={route('admin.events.qr', event.id)}><Button variant="secondary" size="sm">Lihat QR</Button></Link>
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="destructive" size="sm">Hapus</Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Anda yakin?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Tindakan ini tidak dapat dibatalkan. Ini akan menghapus event secara permanen.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Batal</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => {
                                                            // Tambahkan pengecekan untuk memastikan ID tidak undefined
                                                            if (event.id) {
                                                                handleDelete(event.id);
                                                            }
                                                        }}>
                                                            Lanjutkan
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">Belum ada event.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                {/* Tambahkan komponen Pagination di sini jika ada */}
            </div>
        </MainLayout>
    );
}
