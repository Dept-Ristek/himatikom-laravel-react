import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Transition } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import React, { FormEventHandler, useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import Image from "@/Components/Image";
interface PageCreateKepengurusanProps {
    title: string;
}
interface KepengurusanFormType {
    name: string;
    description: string;
    periode: string;
    poster: File | null;
}

const PageCreateKepengurusan = ({ title }: PageCreateKepengurusanProps) => {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<KepengurusanFormType>({
        name: "",
        description: "",
        periode: "",
        poster: null,
    });
    const [image, setImage] = useState<string>("/icon/preview.jpg");
    const onChangePoster = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('poster', e.target.files[0])
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.kepengurusan.store'))
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data</h1>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className="mb-2">
                        <Label htmlFor="name" className="text-right">
                            Nama Kepengurusan
                        </Label>
                        <Input id="name" type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="name" className="text-right">
                            Deskripsi
                        </Label>
                        <Textarea id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} className="col-span-3 mb-3" rows={10} />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="email" className="text-right">
                            Periode
                        </Label>
                        <Input id="periode" type="text" value={data.periode} onChange={(e) => setData('periode', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="poster" className="text-right">
                            Poster
                        </Label>
                        <Input id="poster" type="file" onChange={onChangePoster} className="col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1" />
                    </div>
                    <div className="flex flex-row justify-between items-start">
                        <div className="bg-slate-400 rounded-md w-[200px] h-[350px] border border-slate-400">
                            <Image src={image} alt="Preview Poster Image" className="rounded-md border-slate-400 w-[200px] h-[350px] object-cover" />
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Link href={route('admin.kepengurusan.index')}>
                                <Button className="bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2" disabled={processing} type="button">Kembali</Button>
                            </Link>
                            <Button type="submit" disabled={processing}>Simpan</Button>
                        </div>
                    </div>
                    <Transition show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0">
                        <span className="text-sm">Berhasil!</span>
                    </Transition>
                </form>
            </div>
        </MainLayout>
    );
}
export default PageCreateKepengurusan;
