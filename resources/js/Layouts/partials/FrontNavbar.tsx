import Image from "@/Components/Image";
import { Link, usePage } from "@inertiajs/react";
import { AlignJustifyIcon } from "lucide-react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarSeparator,
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
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import axios from "axios";
import { Prodi } from "@/types";
import { useEffect, useState } from "react";

const FrontNavbar = () => {
    const user = usePage().props.auth.user;
    const [prodis, setProdis] = useState<Prodi[]>([]);

    useEffect(() => {
        axios.get(route('api.prodi.get')).then((response) => {
            setProdis(response.data);
        }).catch((error) => console.error(error))
    }, []);

    return (
        <div className="bg-zinc-900 py-5 lg:px-[10rem] md:px-[10rem] px-5 flex text-white justify-between items-center">
            <div className="flex flex-row gap-[4rem] items-center">
                <Link href={route('v2.front.index')}>
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
                            <MenubarLabel className="relative">
                                <Link href={route('v2.front.index')}>
                                    Beranda
                                </Link>
                            </MenubarLabel>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Tentang</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    <Link href={route('v2.front.jurusan')}>
                                        Jurusan
                                    </Link>
                                </MenubarItem>
                                <MenubarItem>
                                    <Link href={route('v2.front.himpunan')}>
                                        Himpunan
                                    </Link>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Program</MenubarTrigger>
                            <MenubarContent>
                                {
                                    prodis.map((data, index) => {
                                        return (
                                            <Link href={`/v2/program/prodi/${data.slug}`} key={index}>
                                                <MenubarItem key={index}>
                                                    {data.name}
                                                </MenubarItem>
                                            </Link>
                                        );
                                    })
                                }
                                <MenubarItem>
                                    <Link href={route('v2.front.proker')}>
                                        Program Kerja
                                    </Link>
                                </MenubarItem>
                                <MenubarItem>
                                    <Link href={route('v2.mubes.index')}>
                                        Mubes 2024
                                    </Link>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarLabel className="relative">
                                <Link href={route('v2.front.blog')}>
                                    Berita
                                </Link>
                            </MenubarLabel>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarLabel className="relative">
                                <Link href={route('v2.front.product')}>
                                    Produk
                                </Link>
                            </MenubarLabel>
                        </MenubarMenu>
                        {user ?
                            <MenubarMenu>
                                <MenubarTrigger className="hidden md:block">Akun</MenubarTrigger>
                                <MenubarContent forceMount>
                                    <MenubarLabel inset>{user.name}</MenubarLabel>
                                    <MenubarSeparator />
                                    <MenubarItem inset>
                                        <Link href={route('admin.dashboard.index')} as="button">
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
                        <SheetContent side={'right'} className="bg-zinc-900 w-screen text-white border-none">
                            <SheetHeader>
                                <SheetTitle className="text-slate-300"></SheetTitle>
                                <SheetDescription className="text-slate-300">
                                </SheetDescription>
                            </SheetHeader>
                            <Accordion type="single" collapsible className="w-full text-slate-300">
                                <AccordionItem value="beranda" className="border-b-0">
                                    <Link href={route('v2.front.index')}>
                                        Beranda
                                    </Link>
                                </AccordionItem>
                                <AccordionItem value="tentang">
                                    <AccordionTrigger>Tentang</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-3">
                                        <Link href={route('v2.front.jurusan')}>
                                            Jurusan
                                        </Link>
                                        <Link href={route('v2.front.himpunan')}>
                                            Himpunan
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="program">
                                    <AccordionTrigger>Program</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-3">
                                        {
                                            prodis &&
                                            prodis.map((data, index) => {
                                                return (
                                                    <Link href={`/v2/program/prodi/${data.slug}`} key={index}>
                                                        {data.name}
                                                    </Link>
                                                );
                                            })
                                        }
                                        <Link href={route('v2.front.proker')}>
                                            Program Kerja
                                        </Link>
                                        <Link href={route('v2.mubes.index')}>
                                            Mubes 2024
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="berita" className="mt-4 border-b-0">
                                    <Link href={route('v2.front.blog')}>
                                        Berita
                                    </Link>
                                </AccordionItem>
                                <AccordionItem value="produk" className="mt-4 border-b-0">
                                    <Link href={route('v2.front.product')}>
                                        Produk
                                    </Link>
                                </AccordionItem>
                                {user ?
                                    <AccordionItem value="akun">
                                        <AccordionTrigger>Akun</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-3">
                                            <Link href={route('admin.dashboard.index')}>
                                                Dashboard
                                            </Link>
                                            <Link href={route('logout')} method="post" as="button">
                                                Logout
                                            </Link>
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
