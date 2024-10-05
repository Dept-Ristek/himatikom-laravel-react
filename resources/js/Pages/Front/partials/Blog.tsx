import '../custom.css';
import { Blog } from "@/types";
import FrontLayout from "@/Layouts/FrontLayout";
import { Head, Link } from "@inertiajs/react";
import Image from "@/Components/Image";
import ReactQuill from "react-quill";
import { Separator } from '@/Components/ui/separator';
import { Button } from '@/Components/ui/button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const PageDetailBlog = ({ title, blog }: { title: string; blog: Blog; }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const getAllBlog = (id: string) => {
        axios.get(route('api.blog.get', [id, 3])).then((response) => {
            setBlogs(response.data.data);
        }).catch((error) => console.error(error));
    }

    useEffect(() => {
        getAllBlog(blog.id as string);
    }, [])

    return (
        <FrontLayout>
            <Head title={title} />
            <section className="mb-[3rem]">
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default my-5">{blog.title}</h1>
                <div className="grid grid-cols-1 rounded-lg justify-items-center">
                    <div className="flex flex-col p-2 rounded-lg justify-center items-center md:w-4/5 lg:w-4/5 w-full">
                        <Image src={blog.image as string} className="rounded-lg shadow-md mb-[2rem] w-[60rem]" />
                        <ReactQuill value={blog.content} readOnly theme="bubble" className="lg:w-3/5 md:w-3/5 w-full text-justify" />
                        <Separator />
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
                                    <Link href={route('v2.front.blog.detail', data.id)}>
                                        <Button>Detail</Button>
                                    </Link>
                                </div>
                            )
                        })
                        :
                        <h1 className="text-2xl text-center font-bold">Belum ada berita terbaru!</h1>
                    }
                </div>
                {blogs.length > 3 ?
                    <div className="flex justify-center items-center my-[3rem]">
                        <Link href="/">
                            <Button className="bg-primary">Berita Lainya</Button>
                        </Link>
                    </div>
                    :
                    <></>
                }
            </section>
        </FrontLayout>
    );
}
export default PageDetailBlog;
