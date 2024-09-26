import { Kepengurusan } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Transition } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import React, { FormEventHandler, useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import Image from "@/Components/Image";

interface PageEditKepengurusanProps {
    title: string;
    kepengurusan: Kepengurusan
}

const PageEditKepengurusan = ({ title, kepengurusan }: PageEditKepengurusanProps) => {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Kepengurusan>({
        name: kepengurusan.name,
        description: kepengurusan.description,
        periode: kepengurusan.periode,
        poster: kepengurusan.poster,
        _method: "PUT",
    });
    const [image, setImage] = useState<File | string | null>(kepengurusan.poster);
    const onChangePoster = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setData('poster', e.target.files[0])
            setImage(e.target.files[0])
            // console.log(data.poster);
        }
    }
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.kepengurusan.update', kepengurusan.id));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Edit Data</h1>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className="mb-2">
                        <Label htmlFor="name" className="text-right">
                            Nama Kepengurusan
                        </Label>
                        <Input id="name" name="name" type="text" value={data.name ?? kepengurusan.name} onChange={(e) => setData('name', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="name" className="text-right">
                            Deskripsi
                        </Label>
                        <Textarea id="description" name="description" value={data.description ?? kepengurusan.description} onChange={(e) => setData('description', e.target.value)} className="col-span-3 mb-3" rows={10} />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="periode" className="text-right">
                            Periode
                        </Label>
                        <Input id="periode" name="periode" type="text" value={data.periode} onChange={(e) => setData('periode', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="poster" className="text-right">
                            Poster
                        </Label>
                        <Input id="poster" name="poster" type="file" onChange={onChangePoster} className="col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1" />
                    </div>
                    <div className="flex flex-row justify-between items-start">
                        <div className="bg-slate-400 rounded-md w-[200px] h-[350px] border border-slate-400">
                            {
                                image &&
                                <Image src={typeof image == 'string' ? image : URL.createObjectURL(image)} alt="Preview Poster Image" className="rounded-md border-slate-400 w-[200px] h-[350px] object-cover" />
                            }
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Link href={route('admin.kepengurusan.index')}>
                                <Button className="bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2" type="button" disabled={processing}>Kembali</Button>
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
export default PageEditKepengurusan;
