import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Transition } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import React, { FormEventHandler, useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import Image from "@/Components/Image";

interface PageCreateUsersProps {
    title: string;
}
interface UserFormType {
    nim: string;
    name: string;
    email: string;
    avatar?: File | null;
}

const PageCreateUsers = ({ title }: PageCreateUsersProps) => {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<UserFormType>({
        nim: "",
        name: "",
        email: "",
        avatar: null,
    });
    const [image, setImage] = useState<string>("/icon/default-avatar.jpg");
    const onChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('avatar', e.target.files[0])
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.user.store'))
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data</h1>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className="mb-2">
                        <Label htmlFor="nim" className="text-right">
                            NIM
                        </Label>
                        <Input id="nim" type="text" value={data.nim} onChange={(e) => setData('nim', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="name" className="text-right">
                            Nama
                        </Label>
                        <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="avatar" className="text-right">
                            Avatar
                        </Label>
                        <Input id="avatar" type="file" onChange={onChangeAvatar} className="col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1" />
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="bg-slate-400 rounded-full w-[150px] h-[150px]">
                            <Image src={image} alt="Preview Avatar Image" className="rounded-full border-slate-400 w-[150px] h-[150px] object-cover" />
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Link href={route('admin.user.index')} className="bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2" disabled={processing}>
                                Kembali
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
export default PageCreateUsers;
