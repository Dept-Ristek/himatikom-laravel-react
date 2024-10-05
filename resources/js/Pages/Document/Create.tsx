import {
    Document
} from "@/types";
import {
    Head,
    Link,
    useForm
} from "@inertiajs/react";
import {
    FormEventHandler,
    useEffect,
    useState,
} from "react";
import { Label } from "@/Components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/Components/ui/popover";
import { Button } from "@/Components/ui/button";
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
    CommandList
} from "@/Components/ui/command";
import { cn } from "@/lib/utils";
import { Transition } from "@headlessui/react";
import { Input } from '@/Components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { tags, docTypes } from "@/Pages/Document/types/data";
import MainLayout from "@/Layouts/MainLayout";
import { Textarea } from "@/Components/ui/textarea";
const PageCreateDocument = ({ title }: { title: string }) => {
    const { toast } = useToast();
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Document>({
        name: "",
        tag: "",
        filepath: null,
        description: "",
        doc_from: null,
        doc_to: null,
    });
    const [label, setLabel] = useState<{
        label_tag: string | null,
        label_type: string | null,
    }>({
        label_tag: null,
        label_type: null,
    });
    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                variant: "default",
                title: `Tambah Document`,
                description: `Berhasil menambahkan data document baru!`,
            });
            setData({
                ...data,
                name: "",
                tag: "",
                filepath: "",
                description: "",
                doc_from: null,
                doc_to: null,
            });
            setLabel({
                ...label,
                label_tag: null,
                label_type: null,
            });
        }
    }, [recentlySuccessful]);
    const onChangeDocument = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('filepath', e.target.files[0])
        }
    }
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.document.store'));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Tambah Data Document</h1>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <Label className="text-right">
                            Nama Document
                        </Label>
                        <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-3">
                        <Label className="text-right">
                            Document Tag
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={'outline'} role="combobox" className="w-full justify-between">
                                    {label.label_tag ?? "Pilih Document Tag"}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Cari berdasarkan Nama Tag..."
                                        className="h-9"
                                    />
                                    <CommandList>
                                        <CommandEmpty>Data tag tidak ditemukan.</CommandEmpty>
                                        <CommandGroup>
                                            {tags.map((tag) => {
                                                return (
                                                    <CommandItem
                                                        value={tag.id}
                                                        key={tag.id}
                                                        onSelect={(e) => {
                                                            Promise.all([
                                                                setData('tag', tag.id),
                                                                setLabel((val) => ({
                                                                    ...val,
                                                                    label_tag: tag.label
                                                                }))
                                                            ])
                                                        }}
                                                    >
                                                        {tag.label}
                                                        <CheckIcon
                                                            className={cn(
                                                                "ml-auto h-4 w-4 text-black",
                                                                tag.id === data.tag
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
                    <div className="mb-3" hidden={data.tag != 'surat'}>
                        <Label className="text-right">
                            Tipe Surat
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={'outline'} role="combobox" className="w-full justify-between">
                                    {label.label_type ?? "Pilih Tipe Surat"}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Cari berdasarkan tipe surat..."
                                        className="h-9"
                                    />
                                    <CommandList>
                                        <CommandEmpty>Data tipe surat tidak ditemukan.</CommandEmpty>
                                        <CommandGroup>
                                            {docTypes.map((type) => {
                                                return (
                                                    <CommandItem
                                                        value={type.id}
                                                        key={type.id}
                                                        onSelect={(e) => {
                                                            Promise.all([
                                                                setData('type', type.id),
                                                                setLabel((val) => ({
                                                                    ...val,
                                                                    label_type: type.label
                                                                }))
                                                            ])
                                                        }}
                                                    >
                                                        {type.label}
                                                        <CheckIcon
                                                            className={cn(
                                                                "ml-auto h-4 w-4 text-black",
                                                                type.id === data.type
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
                    <div className="mb-3" hidden={data.tag != 'surat'}>
                        <Label className="text-right">
                            Nama Pengirim
                        </Label>
                        <Input id="doc_from" value={data.doc_from as string} onChange={(e) => setData('doc_from', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-3" hidden={data.tag != 'surat'}>
                        <Label className="text-right">
                            Nama Penerima
                        </Label>
                        <Input id="doc_to" value={data.doc_to as string} onChange={(e) => setData('doc_to', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="name" className="text-right">
                            Deskripsi
                        </Label>
                        <Textarea id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} className="col-span-3 mb-3" rows={10} placeholder="Tuliskan saja tidak ada jika tidak ada deskripsi untuk dokumen" />
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="filePath" className="text-right">
                            Upload Document
                        </Label>
                        <Input id="filePath" type="file" onChange={onChangeDocument} className="col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1" />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Link href={route('admin.document.index')} className="bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2">
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
        </MainLayout>
    );
}
export default PageCreateDocument;
