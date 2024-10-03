import { Head, useForm, Link } from '@inertiajs/react';
import { Blog } from "@/types";
import { FormEventHandler, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Button } from '@/Components/ui/button';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import ReactQuill from 'react-quill';
import Image from '@/Components/Image';
import MainLayout from "@/Layouts/MainLayout";
import { useToast } from '@/hooks/use-toast';

const PageCreateBlog = ({ title }: { title: string }) => {
    const { toast } = useToast();
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Blog>({
        title: "",
        image: null,
        content: "",
    });
    const [image, setImage] = useState<string>("/icon/preview.jpg");
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('image', e.target.files[0])
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }
    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                variant: "default",
                title: `Tambah Berita`,
                description: `Berhasil menambahkan data berita baru!`,
            });
            setData({
                ...data,
                title: "",
                image: null,
                content: "",
            });
            setImage("/icon/preview.jpg");
        }
    }, [recentlySuccessful])
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.blog.store'));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-3xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data Berita</h1>
                <form onSubmit={submit}>
                    <div className="mb-2">
                        <Label htmlFor="title" className="text-right">
                            Judul
                        </Label>
                        <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} className="col-span-3 mb-3" />
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
                        <Link href={route('admin.blog.index')}>
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
        </MainLayout>
    );
}
export default PageCreateBlog;
