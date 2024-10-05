import { Head } from "@inertiajs/react";
import FrontLayout from "@/Layouts/FrontLayout";
import { Prodi } from "@/types";
import Image from "@/Components/Image";
import ReactQuill, { Quill } from 'react-quill';
import '../custom.css';

const FrontProdi = ({ title, prodi }: { title: string; prodi: Prodi }) => {



    return (
        <FrontLayout>
            <Head title={title} />
            <section className="mb-[3rem]">
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default my-5">{prodi.name}</h1>
                <div className="grid grid-cols-1 rounded-lg justify-items-center">
                    <div className="flex flex-col p-2 rounded-lg justify-center items-center md:w-4/5 lg:w-4/5 w-full">
                        <Image src={prodi.image as string} className="rounded-lg shadow-md mb-[2rem]" />
                        <ReactQuill value={prodi.content} readOnly theme="bubble" className="lg:w-3/5 md:w-3/5 w-full text-justify" />
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
export default FrontProdi;
