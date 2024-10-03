import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Inbox } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import { Transition } from "@headlessui/react";
import { FormEventHandler, useEffect } from "react";
import { Switch } from "@/Components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const Mailing = () => {
    const { toast } = useToast();
    const user = usePage().props.auth.user
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm<Inbox>({
        is_anon: true,
        content: "",
    });

    useEffect(() => {
        if (recentlySuccessful) {
            toast({
                variant: "default",
                title: "Saran & Masukan",
                description: "Saran dan masukan anda berhasil dikirimkan!",
            })
        }
    }, [recentlySuccessful]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (!user) {
            window.location.href = route('login');
        }
        post(route('admin.inbox.store'))
        setData({
            ...data,
            is_anon: true,
            content: ""
        })
    };
    return (
        <section className="mb-[3rem] flex flex-col w-full justify-center items-center p-3" >
            <div className="p-3 rounded-lg w-full md:w-1/2 lg:w-1/2 bg-slate-50 shadow-md">
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default">Saran & Masukan</h1>
                <form onSubmit={submit}>
                    {user ?
                        <div className="mb-3">
                            <Label className="text-right">
                                Sembunyikan Nama Pengirim?
                            </Label>
                            <div className="flex flex-row gap-2 items-center">
                                <Switch id="is_proker" checked={data.is_anon} onCheckedChange={(e) => setData('is_anon', data.is_anon ? false : true)} />
                                <Label htmlFor="is_proker">{data.is_anon ? "Anonim" : user?.name}</Label>
                            </div>
                        </div> : <></>
                    }
                    <div className="mb-2 text-zinc-900">
                        <Label htmlFor="content" className="text-right text-md">
                            Isi Pesan
                        </Label>
                        <Textarea id="description" value={data.content} onChange={(e) => setData('content', e.target.value)} className="col-span-3 mb-3 w-full border-zinc-900" rows={10} />
                    </div>
                    <div className="flex flex-row items-center gap-2">
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
        </section>
    );
}
export default Mailing;
