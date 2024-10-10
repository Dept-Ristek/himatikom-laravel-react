import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Transition } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import React, { FormEventHandler, useEffect, useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { useToast } from "@/hooks/use-toast";

const PageImportUsers = ({ title }: { title: string }) => {
    const { toast } = useToast();
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<{ file: File | null }>({
        file: null,
    });
    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                variant: "default",
                title: "Import User",
                description: "Berhasil menambahkan data user baru!",
            });
            setData({
                ...data,
                file: null
            });
        }
    }, [recentlySuccessful])
    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('file', e.target.files[0])
        }
    };
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.user.import.store'))
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data</h1>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className="mb-2">
                        <Label htmlFor="file" className="text-right">
                            Input file (xlsx)
                        </Label>
                        <Input id="file" type="file" onChange={onChangeFile} className="col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1" />
                    </div>
                    <div className="flex flex-row justify-between items-center">
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
export default PageImportUsers;
