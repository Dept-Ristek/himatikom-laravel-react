import { Prodi } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Transition } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";
import Image from "@/Components/Image";
import ReactQuill from 'react-quill';
import MainLayout from "@/Layouts/MainLayout";

const PageCreateProdi = ({ title }: { title: string }) => {
    const { toast } = useToast();
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Prodi>({
        name: "",
        image: null,
        content: "",
    });
    const [image, setImage] = useState<string>("/icon/preview.jpg");
    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                variant: "default",
                title: "Tambah Program Studi",
                description: "Berhasil menambahkan data program studi baru!",
            });
            setData({
                ...data,
                name: "",
                image: null,
                content: "",
            });
            setImage("/icon/preview.jpg");
        }
    }, [recentlySuccessful]);
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('image', e.target.files[0])
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.prodi.store'));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-2xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data</h1>
                <form onSubmit={submit}>
                    <div className="mb-2">
                        <Label htmlFor="name" className="text-right">
                            Nama
                        </Label>
                        <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="image" className="text-right">
                            Gambar
                        </Label>
                        <Input id="image" type="file" onChange={onChangeImage} className="col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1" />
                    </div>
                    <div className="mb-2">
                        <div className="bg-slate-400 rounded-md h-[25rem] border border-slate-400">
                            {
                                image &&
                                <Image src={typeof image == 'string' ? image : URL.createObjectURL(image)} alt="Preview Poster Image" className="rounded-md w-full h-[25rem] border-slate-400 object-cover" />
                            }
                        </div>
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="content" className="text-right">
                            Deskripsi
                        </Label>
                        <ReactQuill theme="snow" value={data.content} onChange={(e) => setData('content', e)} className="rounded-md" placeholder="Type anything..." />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Link href={route('admin.kepengurusan.index')}>
                            <Button className="bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2" disabled={processing} type="button">Kembali</Button>
                        </Link>
                        <Button type="submit" disabled={processing}>Simpan</Button>
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
        </MainLayout >
    );
}
export default PageCreateProdi;
