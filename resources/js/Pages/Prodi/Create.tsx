import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Transition } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import { FormEventHandler } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Label } from "@/components/ui/label";
interface PageCreateProdiProps {
    title: string;
}
const PageCreateProdi = ({ title }: PageCreateProdiProps) => {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<{ name: string }>({
        name: "",
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.prodi.store'));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data</h1>
                <form onSubmit={submit}>
                    <Label htmlFor="name" className="text-right">
                        Nama
                    </Label>
                    <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="col-span-3 mb-3" />
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
export default PageCreateProdi;
