import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/Components/ui/command";
import { Link } from "@inertiajs/react";
import {
    Building2Icon,
    LayoutDashboardIcon,
    LogOutIcon,
    Settings,
    User,
    Users2Icon,
    BookKeyIcon,
} from "lucide-react";
import { AlertDialog, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import AlertLogout from "@/Layouts/components/AlertLogout";
interface CommandContentProps {
    className?: string;
}
const CommandContent = ({ className }: CommandContentProps) => {
    const url = route().current()
    return (
        <Command className={className}>
            <div>
                <CommandInput placeholder="Type a command or search..." className="border-none" />
            </div>
            <CommandList className="max-h-screen">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="App">
                    <Link href={route('dashboard')}>
                        <CommandItem className={url == 'dashboard' ? "bg-white text-black" : "text-white"}>
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
                </CommandGroup>
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
                            <AlertLogout />
                        </AlertDialog>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
export default CommandContent;
