import {
    Kepengurusan,
    KepanitiaanProker,
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
import { Button } from "@/Components/ui/button";
import { Transition } from "@headlessui/react";
import MainLayout from "@/Layouts/MainLayout";
import Checkbox from "@/Components/Checkbox";
const PageCreateProkerKepanitiaan = ({ title, proker, kepanitiaans, kepanitiaan_prokers }: { title: string, proker: Proker, kepanitiaans: Kepengurusan[], kepanitiaan_prokers: KepanitiaanProker[] }) => {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<{
        proker_id: string;
        kepanitiaan_id: string[];
    }>({
        proker_id: "",
        kepanitiaan_id: [],
    });
    const [check, setCheck] = useState<{ check: boolean[]; id: string[] }>({
        check: [],
        id: []
    })
    const handleKepanitiaanChange = (id: string) => {
        const newKepanitiaan = [...data.kepanitiaan_id]
        const newCheck = [...check.check]
        const newCheckId = [...check.id]
        if (check.id.includes(id)) {
            const index = newKepanitiaan.indexOf(id)
            newKepanitiaan.splice(index, 1)
        } else {
            newKepanitiaan.push(id)
            newCheck.push(true)
            newCheckId.push(id)
        }
        setData({ ...data, kepanitiaan_id: newKepanitiaan })
        setCheck({
            ...check,
            check: newCheck,
            id: newCheckId,
        })
    }
    useEffect(() => {
        if (kepanitiaan_prokers) {
            const CheckExists = [...check.check]
            const CheckIdExists = [...check.id]
            const kepanitiaanProkerExists = [...data.kepanitiaan_id];
            kepanitiaan_prokers.forEach((data) => {
                kepanitiaanProkerExists.push(data.kepanitiaan_id)
                CheckExists.push(true)
                CheckIdExists.push(data.kepanitiaan_id)
            })
            setData({
                ...data,
                kepanitiaan_id: kepanitiaanProkerExists,
                proker_id: proker.id as string
            })
        }
    }, [kepanitiaan_prokers])
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data)
        // post(route('admin.proker.kepanitiaan.store', proker.id));
    };
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
                <h1 className="text-2xl text-black font-bold mb-5">Form Menambahkan/Mengurangi Kepanitiaan Proker</h1>
                <form onSubmit={submit}>
                    <div className="mb-3 flex flex-col gap-3">
                        {kepanitiaans.map((kepanitiaan) => {
                            return (
                                <div className="flex items-center space-x-2" key={kepanitiaan.id}>
                                    <Checkbox
                                        id="tkepengurusan_id"
                                        name="kepengurusan_id"
                                        checked={data.kepanitiaan_id.includes(kepanitiaan.id as string)}
                                        onChange={() => console.log(`Changed!`)}
                                        onClick={() => handleKepanitiaanChange(kepanitiaan?.id as string)}
                                        className="p-2"
                                    />
                                    <Label
                                        htmlFor="terms"
                                        className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {kepanitiaan.name}
                                    </Label>
                                </div>
                            )
                        })}
                    </div >
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
export default PageCreateProkerKepanitiaan;
