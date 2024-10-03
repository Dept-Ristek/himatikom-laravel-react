import {
    Kepengurusan,
    Proker
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
import { Switch } from "@/Components/ui/switch";
import { Calendar } from '@/Components/ui/calendar';
import MainLayout from "@/Layouts/MainLayout";
import { useToast } from "@/hooks/use-toast";
const PageCreateProker = ({ title, kepengurusans, proker }: { title: string, kepengurusans: Kepengurusan[], proker: Proker }) => {
    const { toast } = useToast();
    const { data, setData, put, errors, processing, recentlySuccessful } = useForm<Proker>({
        name: proker.name,
        is_proker: proker.is_proker,
        schedule: proker.schedule ?? "",
        need_to_register: proker.need_to_register,
        kepengurusan_id: proker.kepengurusan_id,
        start_register: proker.start_register ?? "",
        end_register: proker.end_register ?? "",
    });
    const [date, setDate] = useState<{
        schedule: Date | undefined,
        start_register: Date | undefined,
        end_register: Date | undefined,
    }>({
        schedule: proker.schedule ? new Date(proker.schedule as string | number | Date) : new Date(),
        start_register: proker.start_register ? new Date(proker.start_register as string | number | Date) : new Date(),
        end_register: proker.end_register ? new Date(proker.end_register as string | number | Date) : new Date(),
    });
    const [label, setLabel] = useState<{
        kepengurusan_label: string | null | undefined,
        is_proker: boolean,
        need_to_register: boolean | undefined,
    }>({
        kepengurusan_label: proker?.kepengurusan?.name,
        is_proker: data.is_proker,
        need_to_register: data.need_to_register,
    });
    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                variant: "default",
                title: `Edit ${label.is_proker ? "Program Kerja" : "Agenda"}`,
                description: `Berhasil mengubah data ${label.is_proker ? "Program Kerja" : "Agenda"}!`,
            });
        }
    }, [recentlySuccessful]);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('admin.proker.update', proker.id));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Edit Data Proker</h1>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <Label className="text-right">
                            Nama Proker atau Agenda
                        </Label>
                        <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="col-span-3 mb-3" />
                    </div>
                    <div className="mb-3">
                        <Label className="text-right">
                            Departemen
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={'outline'} role="combobox" className="w-full justify-between">
                                    {label.kepengurusan_label ?? "Pilih Departemen"}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Cari berdasarkan Nama Departemen..."
                                        className="h-9"
                                    />
                                    <CommandList>
                                        <CommandEmpty>Data departemen tidak ditemukan.</CommandEmpty>
                                        <CommandGroup>
                                            {kepengurusans.map((kepengurusan) => {
                                                return (
                                                    <CommandItem
                                                        value={kepengurusan.name}
                                                        key={kepengurusan.id}
                                                        onSelect={(e) => {
                                                            Promise.all([
                                                                setData('kepengurusan_id', kepengurusan.id),
                                                                setLabel((val) => ({
                                                                    ...val,
                                                                    kepengurusan_label: kepengurusan.name
                                                                }))
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
                    <div className="mb-3">
                        <Label className="text-right">
                            Proker / Agenda
                        </Label>
                        <div className="flex flex-row gap-2 items-center">
                            <Switch id="is_proker" checked={data.is_proker} onCheckedChange={(e) => setData('is_proker', data.is_proker ? false : true)} />
                            <Label htmlFor="is_proker">{data.is_proker ? "Proker" : "Agenda"}</Label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Label className="text-right">
                            Jadwal {data.is_proker ? "Proker" : "Agenda"}
                        </Label>
                        <Calendar
                            initialFocus
                            mode="single"
                            selected={date.schedule}
                            defaultMonth={date.schedule}
                            onSelect={(e) => {
                                Promise.all([
                                    setData('schedule', e?.toISOString()),
                                    setDate((val) => ({
                                        ...val,
                                        schedule: e
                                    }))
                                ])
                            }} className="rounded-md" />
                    </div>
                    <div className="mb-3">
                        <Label className="text-right">
                            Memerlukan Open Recruitment
                        </Label>
                        <div className="flex flex-row gap-2 items-center">
                            <Switch id="need_to_register" checked={data.need_to_register} onCheckedChange={(e) => setData('need_to_register', data.need_to_register ? false : true)} />
                            <Label htmlFor="need_to_register">{data.need_to_register ? "Ya" : "Tidak"}</Label>
                        </div>
                    </div>
                    <div className="mb-3" hidden={!data.need_to_register}>
                        <Label className="text-right">
                            Recruitment Dimulai
                        </Label>
                        <Calendar
                            initialFocus
                            mode="single"
                            selected={date.start_register}
                            defaultMonth={date.start_register}
                            onSelect={(e) => {
                                Promise.all([
                                    setData('start_register', e?.toISOString()),
                                    setDate((val) => ({
                                        ...val,
                                        start_register: e
                                    }))
                                ])
                            }} className="rounded-md" />
                    </div>
                    <div className="mb-3" hidden={!data.need_to_register}>
                        <Label className="text-right">
                            Recruitment Selesai
                        </Label>
                        <Calendar
                            initialFocus
                            mode="single"
                            selected={date.end_register}
                            defaultMonth={date.end_register}
                            onSelect={(e) => {
                                Promise.all([
                                    setData('end_register', e?.toISOString()),
                                    setDate((val) => ({
                                        ...val,
                                        end_register: e
                                    }))
                                ])
                            }} className="rounded-md" />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Link href={route('admin.proker.index')} className="bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2">
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
export default PageCreateProker;
