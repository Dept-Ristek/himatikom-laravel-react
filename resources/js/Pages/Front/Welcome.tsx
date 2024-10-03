import 'flowbite';
import { cn } from "@/lib/utils";
import { Blog } from "@/types";
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
    const [products, setProduct] = useState([]);

    const getAllBlog = (): void => {
        axios.get(route('api.blog.get')).then((response) => {
            setBlog(response.data.data);
        }).catch((error) => console.error(error));
    }

    const getAllProduct = (): void => {
        axios.get(route('api.product.get')).then((response) => {
            setProduct(response.data);
        }).catch((error) => console.error(error));
    }

    useEffect((): void => {
        const images = ['/carousel/mubes.jpeg', '/carousel/mabim.jpeg', '/carousel/difest1.jpeg', '/carousel/difest2.jpeg'];
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
                        <h1 className="text-3xl font-extrabold ">HIMATIKOM POLSUB</h1>
                        <h3 className="text-xl font-bold ">Yes we are <span className="underline">HIMATIKOM</span></h3>
                        <h3 className="text-xl font-bold ">Always is the best, always in my souls, NEVER SURRENDER</h3>
                        <h3 className="text-xl font-bold ">OUR PRIDE, OUR FAMILY</h3>
                    </div>
                    <div className="flex flex-col p-2 rounded-lg justify-center items-center md:w-2/3 lg:w-2/3 w-full my-3">
                        <div id="default-carousel" className="relative w-full" data-carousel="slide">
                            {/* Carousel wrapper */}
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
                                <span className="bg-zinc-900 opacity-90 rounded-md p-1 text-center">
                                    <h1 className="text-3xl font-extrabold text-slate-100">HIMATIKOM POLSUB</h1>
                                    <h3 className="text-xl font-bold text-slate-100">Yes we are <span className="underline">HIMATIKOM</span></h3>
                                    <h3 className="text-xl font-bold text-slate-100">Always is the best, always in my souls, NEVER SURRENDER</h3>
                                    <h3 className="text-xl font-bold text-slate-100">OUR PRIDE, OUR FAMILY</h3>
                                </span>
                            </div>
                            {/* Slider indicators */}
                            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                <button type="button" className="w-3 h-3 rounded-full " aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" className="w-3 h-3 rounded-full " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button" className="w-3 h-3 rounded-full " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                <button type="button" className="w-3 h-3 rounded-full " aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            </div>
                            {/* Slider controls */}
                            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section Berita */}
            <section className="mb-[3rem] flex flex-col justify-center items-center">
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default">Berita Terbaru HIMATIKOM</h1>
                <div className={cn(blogs.length > 0 ? "p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-zinc-900 gap-3 w-full md:w-2/3 lg:w-2/3" : "flex flex-col justify-center items-center text-zinc-900 w-full")}>
                    {blogs.length > 0 ?
                        blogs.map((data, index) => {
                            return (
                                <div className="flex flex-col p-2 hover:scale-105 transition-transform duration-500 bg-slate-50 shadow-md rounded-lg" key={index}>
                                    <Image src={data.image as string} className="rounded-md mb-3" />
                                    <h1 className="font-bold text-center mb-3">{data.title}</h1>
                                    <Link href="/">
                                        <Button>Detail</Button>
                                    </Link>
                                </div>
                            )
                        })
                        :
                        <h1 className="text-2xl text-center font-bold">Belum ada berita terbaru!</h1>
                    }
                </div>
            </section>

            {/* Section Product */}
            <section className="mb-[3rem]">
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default">HIMATIKOM Store</h1>
                <div className={cn(products.length > 0 ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-zinc-900 gap-3 w-full md:w-2/3 lg:w-2/3" : "flex flex-col justify-center items-center text-zinc-900 w-full")}>
                    {products.length > 0 ?
                        <div className="flex flex-col p-2 hover:scale-105 transition-transform duration-500 bg-zinc-900 rounded-lg">
                            {/*  */}
                        </div>
                        :
                        <h1 className="text-2xl text-center font-bold">Belum ada produk!</h1>
                    }
                </div>
            </section>

            {/* Section Mailing */}
            <Mailing />

        </FrontLayout>
    );
}
export default Welcome;
