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
    SquareAsteriskIcon,
} from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import AlertLogout from "@/Layouts/components/AlertLogout";

const TempMainSidebar = () => {
    const url = route().current()
    const user = usePage().props.auth.user;
    const roles = ['admin', 'pengurus'];
    return (
        <Command className="bg-transparent text-white rounded-none py-3 px-3">
            <div>
                <CommandInput placeholder="Type a command or search..." className="border-none" />
            </div>
            <CommandList className="max-h-screen">
                <CommandEmpty>No results found.</CommandEmpty>
                {user.roles && user.roles == 'admin' || user.roles == 'pengurus' ?
                    <CommandGroup heading="Menu">
                        <Link href={route('admin.pemilihan.index')}>
                            <CommandItem className={url == 'admin.pemilihan.index' ? "bg-white text-black" : "text-white"}>
                                <LayoutDashboardIcon size={20} className="mr-2" />
                                Dashboard
                            </CommandItem>
                        </Link>
                        <Link href={route('admin.token.index')}>
                            <CommandItem className={url == 'admin.token.index' ? "bg-white text-black" : "text-white"}>
                                <SquareAsteriskIcon size={20} className="mr-2" />
                                Token
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
export default TempMainSidebar;
