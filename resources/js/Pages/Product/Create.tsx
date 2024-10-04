import { Product } from "@/types";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/Components/ui/command";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const PageCreateProduct = ({ title }: { title: string }) => {
    const availability = [
        {
            id: "ready",
            label: "Ready"
        },
        {
            id: "pre-order",
            label: "Pre Order",
        },
        {
            id: "sold-out",
            label: "Sold Out",
        }
    ];
    const { toast } = useToast();
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Product>({
        name: "",
        price: 0,
        image: null,
        description: "",
        availability: "",
    });
    const [image, setImage] = useState<string>("/icon/preview.jpg");
    const [label, setLabel] = useState<{
        label_availability: string | null,
    }>({
        label_availability: null,
    });
    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                variant: "default",
                title: "Tambah Produk",
                description: "Berhasil menambahkan data produk baru!",
            });
            setData({
                ...data,
                name: "",
                price: 0,
                image: null,
                description: "",
                availability: "",
            });
            setLabel({
                ...label,
                label_availability: null
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
        post(route('admin.product.store'));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-2xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data Product</h1>
                <form onSubmit={submit}>
                    <div className="mb-2">
                        <Label htmlFor="name" className="text-right">
                            Nama
                        </Label>
                        <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="price" className="text-right">
                            Harga
                        </Label>
                        <Input id="price" value={data.price} onChange={(e) => setData('price', +e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="image" className="text-right">
                            Gambar
                        </Label>
                        <Input id="image" type="file" onChange={onChangeImage} className="col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1" />
                    </div>
                    <div className="mb-2">
                        <div className="bg-slate-400 rounded-md w-[15rem] h-full border border-slate-400">
                            {
                                image &&
                                <Image src={typeof image == 'string' ? image : URL.createObjectURL(image)} alt="Preview Poster Image" className="rounded-md h-full w-[15rem] border-slate-400 object-cover" />
                            }
                        </div>
                    </div>
                    <div className="mb-2">
                        <Label className="text-right">
                            Status Produk
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={'outline'} role="combobox" className="w-full justify-between">
                                    {label.label_availability ?? "Pilih Status Produk"}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Cari Status..."
                                        className="h-9"
                                    />
                                    <CommandList>
                                        <CommandEmpty>Data Status tidak ditemukan.</CommandEmpty>
                                        <CommandGroup>
                                            {availability.map((ava) => {
                                                return (
                                                    <CommandItem
                                                        value={ava.label}
                                                        key={ava.id}
                                                        onSelect={() => {
                                                            Promise.all([
                                                                setData('availability', ava.id),
                                                                setLabel((val) => ({
                                                                    ...val,
                                                                    label_availability: ava.label
                                                                }))
                                                            ])
                                                        }}
                                                    >
                                                        {ava.label}
                                                        <CheckIcon
                                                            className={cn(
                                                                "ml-auto h-4 w-4 text-black",
                                                                ava.id === data.availability
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                );
                                            })}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="description" className="text-right">
                            Deskripsi
                        </Label>
                        <ReactQuill theme="snow" value={data.description} onChange={(e) => setData('description', e)} className="rounded-md" placeholder="Type anything..." />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Link href={route('admin.product.index')}>
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
export default PageCreateProduct;
