import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Transition } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import React, { FormEventHandler, useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { User } from "@/types";

const PageCreateUsers = ({ title, user }: { title: string; user: User }) => {
    const { data, setData, put, errors, processing, recentlySuccessful } = useForm<User>({
        nim: user?.nim,
        name: user?.name,
        email: user?.email,
        password: "",
        repeat_password: "",
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('admin.user.update', user.id))
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Edit Data</h1>
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
                        <Label htmlFor="password" className="text-right">
                            Password
                        </Label>
                        <Input id="password" type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="repeat_password" className="text-right">
                            Repeat Password
                        </Label>
                        <Input id="repeat_password" type="password" value={data.repeat_password} onChange={(e) => setData('repeat_password', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <Link href={route('admin.user.index')} className="bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2">
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
