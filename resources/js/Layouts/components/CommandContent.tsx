import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/Components/ui/command";
import { Link, usePage } from "@inertiajs/react";
import {
    Building2Icon,
    LayoutDashboardIcon,
    LogOutIcon,
    Settings,
    User,
    Users2Icon,
    BookKeyIcon,
    ShieldCheckIcon,
    BookMarkedIcon,
    BookUserIcon,
    LucideDraftingCompass,
    MailWarningIcon,
    Box,
    Archive,
} from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import AlertLogout from "@/Layouts/components/AlertLogout";
interface CommandContentProps {
    className?: string;
}
const CommandContent = ({ className }: CommandContentProps) => {
    const url = route().current()
    const user = usePage().props.auth.user;
    const roles = ['admin', 'pengurus'];
    return (
        <Command className={className}>
            <div>
                <CommandInput placeholder="Type a command or search..." className="border-none" />
            </div>
            <CommandList className="max-h-screen">
                <CommandEmpty>No results found.</CommandEmpty>
                {user.roles && user.roles == 'admin' || user.roles == 'pengurus' ?
                    <CommandGroup heading="Pengurus | Admin Menu">
                        <Link href={route('admin.dashboard.index')}>
                            <CommandItem className={url == 'admin.dashboard.index' ? "bg-white text-black" : "text-white"}>
                                <LayoutDashboardIcon size={20} className="mr-2" />
                                Dashboard
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.user.index')}>
                            <CommandItem className={url == 'admin.user.index' ? "bg-white text-black" : "text-white"}>
                                <Users2Icon size={20} className="mr-2" />
                                Users
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.prodi.index')}>
                            <CommandItem className={url == 'admin.prodi.index' ? "bg-white text-black" : "text-white"}>
                                <Building2Icon size={20} className="mr-2" />
                                Program Studi
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.kepengurusan.index')}>
                            <CommandItem className={url == 'admin.kepengurusan.index' ? "bg-white text-black" : "text-white"}>
                                <BookKeyIcon size={20} className="mr-2" />
                                Kepengurusan
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.pengurus.index')}>
                            <CommandItem className={url == 'admin.pengurus.index' ? "bg-white text-black" : "text-white"}>
                                <ShieldCheckIcon size={20} className="mr-2" />
                                Pengurus
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.kepanitiaan.index')}>
                            <CommandItem className={url == 'admin.kepanitiaan.index' ? "bg-white text-black" : "text-white"}>
                                <BookUserIcon size={20} className="mr-2" />
                                Struktur Kepanitiaan
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.proker.index')}>
                            <CommandItem className={url == 'admin.proker.index' ? "bg-white text-black" : "text-white"}>
                                <BookMarkedIcon size={20} className="mr-2" />
                                Program Kerja | Agenda
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.blog.index')}>
                            <CommandItem className={url == 'admin.blog.index' ? "bg-white text-black" : "text-white"}>
                                <LucideDraftingCompass size={20} className="mr-2" />
                                Berita
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.inbox.index')}>
                            <CommandItem className={url == 'admin.inbox.index' ? "bg-white text-black" : "text-white"}>
                                <MailWarningIcon size={20} className="mr-2" />
                                Saran & Masukan
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.product.index')}>
                            <CommandItem className={url == 'admin.product.index' ? "bg-white text-black" : "text-white"}>
                                <Box size={20} className="mr-2" />
                                Product
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.document.index')}>
                            <CommandItem className={url == 'admin.document.index' ? "bg-white text-black" : "text-white"}>
                                <Archive size={20} className="mr-2" />
                                Dokumen
                            </CommandItem>
                        </Link>
                    </CommandGroup> : <></>}
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <Link href="/profile">
                        <CommandItem className={url == '/profile' ? "bg-white text-black" : "text-white"}>
                            <User size={20} className="mr-2" />
                            Profile
                        </CommandItem>
                    </Link>
                    <Link href="/settings">
                        <CommandItem className={url == '/settings' ? "bg-white text-black" : "text-white"}>
                            <Settings size={20} className="mr-2" />
                            Settings
                        </CommandItem>
                    </Link>
                    <CommandItem className="text-white" asChild>
                        <AlertDialog>
                            <AlertDialogTrigger className="text-sm p-2 w-full text-left text-white hover:text-black hover:bg-secondary rounded-md flex">
                                <LogOutIcon size={20} className="mr-2" />
                                Logout
                            </AlertDialogTrigger>
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
                                        <AlertDialogAction className="w-full">Ya, Logout</AlertDialogAction>
                                    </Link>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                            <AlertLogout />
                        </AlertDialog>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
export default CommandContent;
