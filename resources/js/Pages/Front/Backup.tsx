import 'flowbite';
import { cn } from "@/lib/utils";
import { Blog, Product } from "@/types";
import { useEffect, useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import axios from "axios";
import Image from "@/Components/Image";
import FrontLayout from "@/Layouts/FrontLayout";
import Mailing from '@/Pages/Front/partials/Mailing';
import { Button } from '@/Components/ui/button';

const Welcome = ({ title }: { title: string }) => {
    const user = usePage().props.auth.user
    const [image, setImage] = useState<string[]>([]);
    const [blogs, setBlog] = useState<Blog[]>([]);
    const [products, setProduct] = useState<Product[]>([]);

    const getAllBlog = (): void => {
        axios.get(route('api.blog.get', {
            id: 'all',
            count: 3
        })).then((response) => {
            setBlog(response.data.data);
        }).catch((error) => console.error(error));
    }

    const getAllProduct = (): void => {
        axios.get(route('api.product.get', {
            id: 'all',
            count: 4
        })).then((response) => {
            setProduct(response.data.data);
        }).catch((error) => console.error(error));
    }

    const images: string[] = ['/carousel/mubes.jpeg', '/carousel/mabim.jpeg', '/carousel/difest1.jpeg', '/carousel/difest2.jpeg'];

    // Data untuk galeri kebersamaan (sesuaikan dengan path gambar Anda)
    const galleryImages: string[] = [
        '/carousel/mubes.jpeg', '/carousel/mabim.jpeg', '/carousel/difest1.jpeg', '/carousel/difest2.jpeg','/carousel/mubes.jpeg', '/carousel/mabim.jpeg', '/carousel/difest1.jpeg', '/carousel/difest2.jpeg'
    ];

    useEffect((): void => {
        setImage(images);
        getAllBlog();
        getAllProduct();
    }, []);

    return (
        <FrontLayout>
            <Head title={title} />

            {/* Section Hero */}
            <section className="mb-[3rem]">
                <div className="grid grid-cols-1 rounded-lg justify-items-center">
                    <div className="text-center text-zinc-900 mt-5 my-3 block md:hidden lg:hidden">
                        <h1 className="text-3xl font-extrabold">HIMATIKOM POLSUB</h1>
                        <h3 className="text-xl font-bold">Yes we are <span className="underline text-blue-600">HIMATIKOM</span></h3>
                        <h3 className="text-lg font-bold">Always is the best, always in my souls</h3>
                        <h3 className="text-lg font-bold text-blue-600">NEVER SURRENDER</h3>
                        <h3 className="text-xl font-bold">OUR PRIDE, OUR FAMILY</h3>
                    </div>
                    <div className="flex flex-col p-2 rounded-lg justify-center items-center md:w-2/3 lg:w-2/3 w-full my-3">
                        <div id="default-carousel" className="relative w-full" data-carousel="slide">
                            <div className="relative h-56 overflow-hidden rounded-lg lg:h-[30rem] md:h-[30rem]">
                                {image.map((data, index) => {
                                    return (
                                        <div className="hidden duration-1000 ease-in-out" data-carousel-item key={index}>
                                            <Image src={data} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="absolute z-30 hidden md:flex lg:flex items-center justify-center w-full top-10 md:top-48 lg:top-48">
                                <span className="bg-zinc-900 opacity-95 rounded-md p-4 text-center">
                                    <h1 className="text-3xl font-extrabold text-white">HIMATIKOM POLSUB</h1>
                                    <h3 className="text-xl font-bold text-white">Yes we are <span className="underline text-blue-400">HIMATIKOM</span></h3>
                                    <h3 className="text-lg font-bold text-white">Always is the best, always in my souls</h3>
                                    <h3 className="text-lg font-bold text-blue-400">NEVER SURRENDER</h3>
                                    <h3 className="text-xl font-bold text-white">OUR PRIDE, OUR FAMILY</h3>
                                </span>
                            </div>
                            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                <button type="button" className="w-3 h-3 rounded-full bg-blue-500" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" className="w-3 h-3 rounded-full bg-gray-300" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button" className="w-3 h-3 rounded-full bg-gray-300" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                <button type="button" className="w-3 h-3 rounded-full bg-gray-300" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            </div>
                            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-blue-500/50 group-focus:ring-4 group-focus:ring-blue-300 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-blue-500/50 group-focus:ring-4 group-focus:ring-blue-300 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Kabinet & Ketua */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    {/* Header Seksi yang Konsisten */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-3">Kabinet Cakravikasa</h2>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                            Kabinet yang bergerak dinamis dan terus berkembang, selalu berputar dan bergerak maju, berinovasi menuju kemajuan yang berkelanjutan dan konsisten.
                        </p>
                    </div>

                    {/* Logo Kabinet (Animasi float dan pulse dihapus agar lebih tenang) */}
                    <div className="flex justify-center mb-12">
                        <div className="relative group">
                            <div className="relative bg-white rounded-full p-6 shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-105">
                                <Image src="/icon/cakravikasa-nonbg.png" className="w-40 h-40 object-contain group-hover:rotate-6 transition-transform duration-500" alt="Logo Cakravikasa" />
                            </div>
                        </div>
                    </div>

                    {/* Ketua & Wakil (Animasi blob dan background yang bergerak dihapus, fokus pada hover) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                        {/* Ketua Himpunan */}
                        <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/40 transition-all duration-500">
                            <div className="relative p-8 flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div className="relative w-32 h-32 rounded-full bg-blue-500 p-1 group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ketua" alt="Ketua" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                                    Ketua Himpunan
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Nama Ketua</h3>
                                <p className="text-gray-400">TRPL 3</p>
                            </div>
                        </div>

                        {/* Wakil Ketua */}
                        <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-gray-500/40 transition-all duration-500">
                            <div className="relative p-8 flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div className="relative w-32 h-32 rounded-full bg-gray-500 p-1 group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=wakil" alt="Wakil" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                                    Wakil Ketua
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">Nama Wakil</h3>
                                <p className="text-gray-400">TRPL 3</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button (Animasi bounce dihapus, fokus pada hover) */}
                    <div className="text-center mt-10">
                        <Link href="/kabinet">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                Lihat Kepengurusan Lengkap
                                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section Ngestuck */}
            <section className="mb-[4rem] flex flex-col justify-center items-center">
                <div className="w-full md:w-2/3 lg:w-2/3 px-4">
                    <div className="bg-gradient-to-br from-zinc-900 to-gray-800 rounded-lg shadow-2xl p-8 md:p-12 text-white">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <div className="inline-block bg-blue-600 px-4 py-2 rounded-full mb-4">
                                    <span className="font-bold">Platform Diskusi</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                                    Ngestuck<span className="text-blue-400">.</span>
                                </h2>
                                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                    Tempat berkumpul untuk berdiskusi seputar coding, berbagi ilmu, dan saling membantu
                                    menyelesaikan masalah programming bersama keluarga HIMATIKOM.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3 text-xl">✓</span>
                                        <span>Diskusi coding & problem solving</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3 text-xl">✓</span>
                                        <span>Berbagi tips & trik programming</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-3 text-xl">✓</span>
                                        <span>Kolaborasi project bersama</span>
                                    </li>
                                </ul>
                                <a href="/ngestuck" target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                        Gabung Diskusi Sekarang →
                                    </Button>
                                </a>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="relative">
                                    <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg transform rotate-3 absolute"></div>
                                    <div className="w-64 h-64 bg-white rounded-lg shadow-2xl p-6 relative z-10 flex flex-col justify-center items-center">
                                        <div className="text-6xl mb-4">💬</div>
                                        <p className="text-zinc-900 font-bold text-xl text-center">Bergabunglah dengan komunitas developer HIMATIKOM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Berita */}
            <section className="mb-[4rem] flex flex-col justify-center items-center">
                <div className="w-full md:w-2/3 lg:w-2/3 px-4">
                    <h1 className="font-extrabold text-4xl text-center mb-3 text-zinc-900">Berita Terbaru</h1>
                    <p className="text-center text-gray-600 mb-10 text-lg">Update kegiatan dan informasi HIMATIKOM</p>

                    <div className={cn(blogs.length > 0 ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "flex flex-col justify-center items-center")}>
                        {blogs.length > 0 ?
                            blogs.map((data, index) => {
                                return (
                                    <div className="flex flex-col bg-white hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg overflow-hidden" key={index}>
                                        <div className="h-48 overflow-hidden">
                                            <Image src={data.image as string} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h2 className="font-bold text-lg mb-3 text-zinc-900 line-clamp-2">{data.title}</h2>
                                            <div className="mt-auto">
                                                <Link href={route('v2.front.blog.detail', data.id)}>
                                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Baca Selengkapnya</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className="text-center py-12">
                                <h2 className="text-2xl font-bold text-gray-400">Belum ada berita terbaru</h2>
                            </div>
                        }
                    </div>

                    {blogs.length > 3 &&
                        <div className="text-center mt-8">
                            <Link href="/berita">
                                <Button className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3 text-lg">
                                    Lihat Semua Berita
                                </Button>
                            </Link>
                        </div>
                    }
                </div>
            </section>

            {/* Section HIMATIKOM Store */}
            <section className="mb-[4rem] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-white py-12">
                <div className="w-full md:w-2/3 lg:w-2/3 px-4">
                    <h1 className="font-extrabold text-4xl text-center mb-3 text-zinc-900">HIMATIKOM Store</h1>
                    <p className="text-center text-gray-600 mb-10 text-lg">Produk official HIMATIKOM</p>

                    <div className={cn(products.length > 0 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" : "flex flex-col justify-center items-center")}>
                        {products.length > 0 ?
                            products.map((data, index) => {
                                return (
                                    <div className="flex flex-col bg-white hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg overflow-hidden" key={index}>
                                        <div className="h-56 overflow-hidden bg-gray-100">
                                            <Image src={data.image as string} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h2 className="font-bold text-lg mb-2 text-zinc-900">{data.name}</h2>
                                            <p className="text-blue-600 font-bold text-xl mb-4">Rp {Intl.NumberFormat('id-ID').format(+data.price)}</p>
                                            <div className="mt-auto">
                                                <Link href={route('v2.front.product.detail', data.id)}>
                                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Lihat Detail</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className="text-center py-12 col-span-full">
                                <h2 className="text-2xl font-bold text-gray-400">Belum ada produk tersedia</h2>
                            </div>
                        }
                    </div>

                    {products.length > 4 &&
                        <div className="text-center mt-8">
                            <Link href={route('v2.front.product')}>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                                    Lihat Semua Produk
                                </Button>
                            </Link>
                        </div>
                    }
                </div>
            </section>

            {/* Section Galeri Kebersamaan */}
            <section className="mb-[4rem] flex flex-col justify-center items-center bg-gray-50 py-12">
                <div className="w-full md:w-2/3 lg:w-2/3 px-4">
                    <h1 className="font-extrabold text-4xl text-center mb-3 text-zinc-900">Galeri Kebersamaan</h1>
                    <p className="text-center text-gray-600 mb-10 text-lg">Momen indah bersama keluarga HIMATIKOM</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={img}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    alt={`Kebersamaan ${index + 1}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="text-white font-semibold p-4">Kebersamaan HIMATIKOM</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Mailing (Masukan) */}
            <Mailing />

        </FrontLayout>
    );
}
export default Welcome;
