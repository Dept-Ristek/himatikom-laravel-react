import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect } from "react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Transition } from "@headlessui/react";
import { Textarea } from '@/Components/ui/textarea';
import { Kepanitiaan } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import { useToast } from "@/hooks/use-toast";

const PageCreateKepanitiaan = ({ title }: { title: string }) => {
    const { toast } = useToast();
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Kepanitiaan>({
        name: "",
        description: "",
    });
    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                variant: "default",
                title: "Tambah Kepanitiaan",
                description: "Berhasil menambahkan data kepanitiaan baru!",
            });
            setData({
                ...data,
                name: "",
                description: "",
            });
        }
    }, [recentlySuccessful]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.kepanitiaan.store'));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data Kepanitiaan</h1>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <Label htmlFor="name" className="text-right">
                            Nama
                        </Label>
                        <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="description" className="text-right">
                            Deskripsi
                        </Label>
                        <Textarea value={data.description} onChange={(e) => setData('description', e.target.value)} className="col-span-3 mb-3" rows={10} />
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
        </MainLayout>
    );
}
export default PageCreateKepanitiaan;
