import '../custom.css';
import { Product } from "@/types";
import FrontLayout from "@/Layouts/FrontLayout";
import { Head } from "@inertiajs/react";
import Image from "@/Components/Image";
import ReactQuill from "react-quill";

const PageDetailProduct = ({ title, product }: { title: string; product: Product }) => {
    return (
        <FrontLayout>
            <Head title={title} />
            <section className="mb-[3rem]">
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default">Kabinet</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 rounded-lg justify-items-center">
                    <div className="flex flex-col p-2 rounded-lg justify-center items-center bg-white md:w-3/4 lg:w-3/4 w-full md:justify-self-end lg:justify-self-end justify-self-center">
                        <Image src={product.image as string} className=" w-[25rem] rounded-md" />
                        <h1 className="font-bold text-2xl mb-3">{product.name}</h1>
                        <h3 className="font-bold text-xl mb-3">Rp. {Intl.NumberFormat('id-ID').format(product.price)}</h3>
                    </div>
                    <div className="flex flex-col p-5 rounded-lg bg-white md:w-3/4 lg:w-3/4 w-full md:justify-self-start lg:justify-self-start justify-self-center shadow-md">
                        <div className="mb-3">
                            <ReactQuill theme="bubble" readOnly value={product.description} />
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
export default PageDetailProduct;
