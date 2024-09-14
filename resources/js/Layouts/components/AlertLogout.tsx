import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog";
import { Link } from "@inertiajs/react";
const AlertLogout = () => {
    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Mengakhiri Sesi?</AlertDialogTitle>
                <AlertDialogDescription>
                    Apakah anda yakin ingin mengakhiri sesi? login dibutuhkan kembali apabila ingin memulai sesi baru
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <Link method="post" href={route('logout')} as="button">
                    <AlertDialogAction>Ya, Logout</AlertDialogAction>
                </Link>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
}
export default AlertLogout;
