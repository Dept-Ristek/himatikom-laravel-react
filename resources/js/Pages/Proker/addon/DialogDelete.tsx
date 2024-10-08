import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";
import { Link } from '@inertiajs/react';
import { Proker } from '@/types';
const DialogDeleteProker = ({ proker }: { proker: Proker }) => {
    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
                <AlertDialogDescription>
                    Menghapus data secara permanen memungkinkan anda tidak dapat mengembalikan data yang telah dihapus
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <Link href={route('admin.proker.destroy', proker.id)} method="delete" as="button">
                    <AlertDialogAction className="bg-red-600">Hapus</AlertDialogAction>
                </Link>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
}
export default DialogDeleteProker;
