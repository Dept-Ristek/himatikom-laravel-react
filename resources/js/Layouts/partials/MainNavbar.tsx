import { User } from "@/types";
import { Link } from "@inertiajs/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/Components/ui/dropdown-menu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/ui/avatar";
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
} from "@/Components/ui/alert-dialog";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { AlignJustifyIcon } from "lucide-react";
import CommandContent from "@/Layouts/components/CommandContent";
import Image from "@/Components/Image";
import AlertLogout from "@/Layouts/components/AlertLogout";

interface MainNavbarProps {
    user: User,
    className?: string;
}
const MainNavbar = ({ user, className }: MainNavbarProps) => {
    return (
        <div className="bg-zinc-900 py-5 px-5 flex text-white justify-between items-center">
            <div className="flex flex-row gap-[4rem] items-center">
                <Link href={route('admin.dashboard.index')}>
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <Image src="/icon/logo-himatikom.png" width={40} height={30} />
                        <Image src="/icon/octagram-with-border-radius.png" width={90} />
                    </div>
                </Link>
            </div>
            <div className="flex flex-row gap-5">
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex gap-2 items-center'>
                        <span className="text-sm hidden md:block lg:block">{user.name}</span>
                        <Avatar>
                            <AvatarImage src={user.avatar as string ?? "https://github.com/shadcn.png"} alt="@shadcn" className="object-cover" />
                            <AvatarFallback className="text-black">BT</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-zinc-900 dark:bg-slate-700 text-white border border-slate-700">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-slate-100" />
                        <DropdownMenuItem>
                            <Link href={route('admin.pemilihan.index')}>
                                Dashboard Pemilihan
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={route('v2.front.index')}>
                                Landing Page
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <AlertDialog>
                                <AlertDialogTrigger className="text-sm p-2 w-full text-left hover:text-black hover:bg-secondary rounded-md">Logout</AlertDialogTrigger>
                                <AlertLogout key={"alert-logout-navbar"} />
                            </AlertDialog>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Sheet key={'main-navbar'}>
                    <SheetTrigger className="bg-zinc-900 text-white md:hidden lg:hidden">
                        <AlignJustifyIcon />
                    </SheetTrigger>
                    <SheetTitle>
                        <SheetDescription></SheetDescription>
                    </SheetTitle>
                    <SheetContent className="bg-zinc-900 border-none">
                        <CommandContent className={"bg-transparent text-white rounded-none"} />
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
export default MainNavbar;
