import Image from "@/Components/Image";
import { Link, usePage } from "@inertiajs/react";
import { AlignJustifyIcon } from "lucide-react"
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/Components/ui/menubar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
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

const FrontNavbar = () => {
    const user = usePage().props.auth.user;
    return (
        <div className="bg-zinc-900 py-5 lg:px-[10rem] md:px-[10rem] px-5 flex text-white justify-between items-center">
            <div className="flex flex-row gap-[4rem] items-center">
                <Link href={route('dashboard')}>
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <Image src="/icon/logo-himatikom.png" width={40} height={30} />
                        <Image src="/icon/octagram-with-border-radius.png" width={90} />
                    </div>
                </Link>
            </div>
            <div className="flex flex-row gap-5">
                <div className="hidden lg:block md:block">
                    <Menubar className="bg-transparent rounded-none border-b border-none px-2 lg:px-4">
                        <MenubarMenu>
                            <MenubarLabel className="relative">Beranda</MenubarLabel>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Tentang</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    Jurusan
                                </MenubarItem>
                                <MenubarItem>
                                    Himpunan
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Program</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    D-III Sistem Informasi
                                </MenubarItem>
                                <MenubarItem>
                                    D-IV Teknik Rekayasa Perangkat Lunak
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarLabel className="relative">Berita</MenubarLabel>
                        </MenubarMenu>
                        {user ?
                            <MenubarMenu>
                                <MenubarTrigger className="hidden md:block">Akun</MenubarTrigger>
                                <MenubarContent forceMount>
                                    <MenubarLabel inset>{user.name}</MenubarLabel>
                                    <MenubarSeparator />
                                    <MenubarItem inset>
                                        <Link href={route('dashboard')} as="button">
                                            Dashboard
                                        </Link>
                                    </MenubarItem>
                                    <MenubarItem inset>
                                        <Link href={route('logout')} as="button" method='post'>
                                            Logout
                                        </Link>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            :
                            <MenubarMenu>
                                <Link href={route('login')} as="button">
                                    <MenubarLabel className="relative bg-secondary rounded-md px-5 text-black">Login</MenubarLabel>
                                </Link>
                            </MenubarMenu>
                        }
                    </Menubar>
                </div>
                <div className="lg:hidden md:hidden block">
                    <Sheet key={'front-navbar'}>
                        <SheetTrigger asChild>
                            <AlignJustifyIcon />
                        </SheetTrigger>
                        <SheetContent side={'right'} className="bg-zinc-900 w-[250px] text-white border-none">
                            <SheetHeader>
                                <SheetTitle className="text-slate-300"></SheetTitle>
                                <SheetDescription className="text-slate-300">
                                </SheetDescription>
                            </SheetHeader>
                            <Accordion type="single" collapsible className="w-full text-slate-300">
                                <AccordionItem value="beranda" className="border-b-0">
                                    <Link href={route('front.index')}>
                                        Beranda
                                    </Link>
                                </AccordionItem>
                                <AccordionItem value="tentang">
                                    <AccordionTrigger>Tentang</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-3">
                                        <Link href={route('front.index')}>
                                            Jurusan
                                        </Link>
                                        <Link href={route('front.index')}>
                                            Himpunan
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="program">
                                    <AccordionTrigger>Program</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-3">
                                        <Link href={route('front.index')}>
                                            D-III Sistem Informasi
                                        </Link>
                                        <Link href={route('front.index')}>
                                            D-IV Teknik Rekayasa Perangkat Lunak
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="berita" className="mt-4 border-b-0">
                                    <Link href={route('front.index')}>
                                        Berita
                                    </Link>
                                </AccordionItem>
                                {user ?
                                    <AccordionItem value="akun">
                                        <AccordionTrigger>Akun</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-3">
                                            <Link href={route('dashboard')}>
                                                Dashboard
                                            </Link>
                                            <AlertDialog>
                                                <AlertDialogTrigger className="text-sm w-full text-left hover:text-black hover:bg-secondary rounded-md">Logout</AlertDialogTrigger>
                                                {/* <AlertLogout key={"alert-logout-navbar"} /> */}
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Mengakhiri Sesi?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Apakah anda yakin ingin mengakhiri sesi? login dibutuhkan kembali apabila ingin memulai sesi baru
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Batal</AlertDialogCancel>
                                                        <Link method="post" href={route('logout')} as="button" ref={'logout'}>
                                                            <AlertDialogAction className="w-full">Ya, Logout</AlertDialogAction>
                                                        </Link>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </AccordionContent>
                                    </AccordionItem>
                                    :
                                    <AccordionItem value="login" className="mt-4 border-b-0">
                                        <Link href={route('login')}>
                                            Login
                                        </Link>
                                    </AccordionItem>
                                }
                            </Accordion>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div >
    );
}
export default FrontNavbar;
