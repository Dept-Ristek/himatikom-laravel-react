import { Kepengurusan, User, Pengurus } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import { FormEventHandler, useState } from "react";
import {
    CaretSortIcon,
    CheckIcon
} from "@radix-ui/react-icons";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { cn } from "@/lib/utils";
import { levels } from "@/Pages/Pengurus/types/data";
import { Label } from "@/components/ui/label";
import MainLayout from "@/Layouts/MainLayout";

interface PageCreatePengurusProps {
    title: string;
    users: User[];
    kepengurusans: Kepengurusan[]
}

const PageCreatePengurus = ({ title, users, kepengurusans }: PageCreatePengurusProps) => {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Pengurus>({
        user_id: "",
        kepengurusan_id: "",
        level: "",
    });
    const [label, setLabel] = useState<{
        user_label: string | null,
        kepengurusan_label: string | null,
        level_label: string | null,
    }>({
        user_label: null,
        kepengurusan_label: null,
        level_label: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('admin.pengurus.store'));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data Pengurus</h1>
                <form onSubmit={submit}>
                    <div className="mb-2">
                        <Label className="text-right">
                            Mahasiswa
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={'outline'} role="combobox" className="w-full justify-between">
                                    {label.user_label ?? "Pilih user"}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Cari berdasarkan NIM..."
                                        className="h-9"
                                    />
                                    <CommandList>
                                        <CommandEmpty>Data mahasiswa tidak ditemukan.</CommandEmpty>
                                        <CommandGroup>
                                            {users.map((user) => {
                                                return (
                                                    <CommandItem
                                                        value={user.nim}
                                                        key={user.id}
                                                        onSelect={(e) => {
                                                            Promise.all([
                                                                setData('user_id', user.id),
                                                                setLabel((val) => ({
                                                                    ...val,
                                                                    user_label: `(${user.nim}) ${user.name}`
                                                                }))
                                                            ])
                                                        }}
                                                    >
                                                        ({user.nim}) {user.name}
                                                        <CheckIcon
                                                            className={cn(
                                                                "ml-auto h-4 w-4 text-black",
                                                                user.id === data.user_id
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
                        <Label className="text-right">
                            Kepengurusan
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={'outline'} role="combobox" className="w-full justify-between">
                                    {label.kepengurusan_label ?? "Pilih Kepengurusan"}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Cari Kepengurusan..."
                                        className="h-9"
                                    />
                                    <CommandList>
                                        <CommandEmpty>Data kepengurusan tidak ditemukan.</CommandEmpty>
                                        <CommandGroup>
                                            {kepengurusans.map((kepengurusan) => {
                                                return (
                                                    <CommandItem
                                                        value={kepengurusan.name}
                                                        key={kepengurusan.id}
                                                        onSelect={() => {
                                                            Promise.all([
                                                                setData("kepengurusan_id", kepengurusan.id),
                                                                setLabel((val) => ({
                                                                    ...val,
                                                                    kepengurusan_label: kepengurusan.name
                                                                })),
                                                            ])
                                                        }}
                                                    >
                                                        {kepengurusan.name}
                                                        <CheckIcon
                                                            className={cn(
                                                                "ml-auto h-4 w-4 text-black",
                                                                kepengurusan.id === data.kepengurusan_id
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
                        <Label className="text-right">
                            Jabatan
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={'outline'} role="combobox" className="w-full justify-between">
                                    {label.level_label ?? "Pilih Jabatan"}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Cari Jabatan..."
                                        className="h-9"
                                    />
                                    <CommandList>
                                        <CommandEmpty>Data jabatan tidak ditemukan.</CommandEmpty>
                                        <CommandGroup>
                                            {levels.map((level) => {
                                                return (
                                                    <CommandItem
                                                        value={level.label}
                                                        key={level.id}
                                                        onSelect={() => {
                                                            Promise.all([
                                                                setData("level", level.id),
                                                                setLabel((val) => ({
                                                                    ...val,
                                                                    level_label: level.label
                                                                }))
                                                            ])
                                                        }}
                                                    >
                                                        {level.label}
                                                        <CheckIcon
                                                            className={cn(
                                                                "ml-auto h-4 w-4 text-black",
                                                                level.id === data.level
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
                    <div className="flex flex-row items-center gap-2">
                        <Link href={route('admin.pengurus.index')} className="bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2">
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
            </div >
        </MainLayout >
    );
}
export default PageCreatePengurus;
