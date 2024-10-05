import FrontLayout from "@/Layouts/FrontLayout";
import { Head, Link } from "@inertiajs/react";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import Image from "@/Components/Image";
import { Button } from "@/Components/ui/button";

const PageProducts = ({ title }: { title: string }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [count, setCount] = useState<number>(4);

    const getAllProduct = () => {
        axios.get(route('api.product.get', {
            id: 'all',
            count: count,
        })).then((response) => {
            setProducts(response.data.data)
        }).catch((error) => console.error(error))
    }

    useEffect(() => {
        getAllProduct()
    }, [products])

    const handleClick = () => {
        const newCount = count + 4
        setCount(newCount)
    }
    return (
        <FrontLayout>
            <Head title={title} />
            {/* Section Product */}
            <section className={cn(products.length > 0 ? "mb-[3rem] flex flex-col justify-center items-center" : "mb-[3rem] flex flex-col justify-center items-center h-screen")}>
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default mt-[3rem]">HIMATIKOM Store</h1>
                <div className={cn(products.length > 0 ? "p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-zinc-900 gap-3 w-full md:w-2/3 lg:w-2/3" : "flex flex-col justify-center items-center text-zinc-900 w-full")}>
                    {products.length > 0 ?
                        products.map((data, index) => {
                            return (
                                <div className="flex flex-col p-2 hover:scale-105 transition-transform duration-500 bg-slate-50 shadow-md rounded-lg" key={index}>
                                    <Image src={data.image as string} className="rounded-md mb-3" />
                                    <h1 className="font-bold mb-3">{data.name}</h1>
                                    <h3 className="text-sm font-bold mb-3">Rp. {Intl.NumberFormat('id-ID').format(+data.price)}</h3>
                                    <Link href="/">
                                        <Button>Detail</Button>
                                    </Link>
                                </div>
                            )
                        })
                        :
                        <h1 className="text-2xl text-center font-bold">Belum ada produk!</h1>
                    }
                </div>
                {products.length > 0 ?
                    <div className="flex justify-center items-center my-[3rem]">
                        <Button className="bg-primary" onClick={handleClick}>Produk Lainya</Button>
                    </div>
                    :
                    <></>
                }
            </section>
        </FrontLayout>
    )
}
export default PageProducts;
