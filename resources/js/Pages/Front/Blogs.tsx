import { Blog } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import Image from "@/Components/Image";
import FrontLayout from "@/Layouts/FrontLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const PageBlogs = ({ title }: { title: string; }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [count, setCount] = useState<number>(6);
    const getAllBlog = () => {
        axios.get(route('api.blog.get', {
            id: 'all',
            count: count
        })).then((response) => {
            setBlogs(response.data.data);
        }).then((error) => console.log(error));
    }
    useEffect(() => {
        getAllBlog()
    }, [blogs])

    const handleClick = () => {
        const newCount = count + 3
        setCount(newCount)
    }
    return (
        <FrontLayout>
            <Head title={title} />
            {/* Section Berita */}
            <section className={cn(blogs.length > 0 ? "mb-[3rem] flex flex-col justify-center items-center" : "mb-[3rem] flex flex-col justify-center items-center h-screen")}>
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default mt-[3rem]">Berita Terbaru HIMATIKOM</h1>
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
                {blogs.length > 0 ?
                    <div className="flex justify-center items-center my-[3rem]">
                        <Button className="bg-primary" onClick={handleClick}>Berita Lainya</Button>
                    </div>
                    :
                    <></>
                }
            </section>
        </FrontLayout>
    );
}
export default PageBlogs;
