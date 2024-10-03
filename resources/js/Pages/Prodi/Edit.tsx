import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Transition } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import { FormEventHandler, useEffect, useState } from "react";
import { Prodi } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import Image from "@/Components/Image";
import ReactQuill from 'react-quill';
import { useToast } from "@/hooks/use-toast";

const PageEditProdi = ({ title, prodi }: { title: string, prodi: Prodi }) => {
    const { toast } = useToast();
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Prodi>({
        name: prodi.name,
        image: prodi.image,
        content: prodi.content,
        _method: "PUT"
    });
    const [image, setImage] = useState<string>(prodi.image as string ?? "/icon/preview.jpg");
    useEffect(() => {
        toast({
            variant: "default",
            title: "Edit Program Studi",
            description: "Berhasil mengubah data program studi!",
        })
    });
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('image', e.target.files[0])
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.prodi.update', prodi.id));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Edit Data Program Studi</h1>
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
                        <ReactQuill theme="snow" value={data.content} onChange={(e) => setData('content', e)} className="rounded-md" placeholder="Type anything..." />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Link href={route('admin.prodi.index')} className="bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2">
                            Kembali
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
export default PageEditProdi;
