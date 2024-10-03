import { Kepengurusan } from "@/types";
import FrontLayout from "@/Layouts/FrontLayout";
import { Head } from "@inertiajs/react";
import Image from "@/Components/Image";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";

const Himpunan = ({ title, kepengurusans }: { title: string; kepengurusans: Kepengurusan[] }) => {
    const truncate = (str: string, num: number) => {
        const words: string[] = str.split(" ");
        if (words.length <= num) {
            return str;
        }
        const truncatedWord = words.slice(0, num);
        return truncatedWord.join(" ") + "...";
    }


    return (
        <FrontLayout>
            <Head title={title} />
            <div className="h-auto flex flex-col justify-center items-center px-[6rem] py-[3rem]">
                <section className="mb-[3rem]">
                    <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default">Kabinet</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 rounded-lg justify-items-center">
                        <div className="flex flex-col p-2 rounded-lg justify-center items-center bg-white md:w-3/4 lg:w-3/4 w-full md:justify-self-end lg:justify-self-end justify-self-center shadow-md">
                            <Image src="/icon/octagram.png" className=" w-[30rem] rounded-md" />
                            <h1 className="font-bold text-center text-2xl mb-3">Kabinet Octagram</h1>
                            <p className="text-justify md:w-3/4 lg:w-3/4 w-full mb-3">Kabinet Kemahasiswaan periode 2023-2024 dirancang sebagai motor penggerak inovasi dan kolaborasi, dengan fokus pada pengembangan mahasiswa yang lebih inklusif, progresif, dan berdaya saing.</p>
                        </div>
                        <div className="flex flex-col p-5 rounded-lg bg-white md:w-3/4 lg:w-3/4 w-full md:justify-self-start lg:justify-self-start justify-self-center shadow-md">
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Visi</h1>
                                <p className="text-justify w-full">VISI HIMATIKOM POLSUB KABINET OCTAGRAM “Mewujudkan Himpunan Mahasiswa Teknologi Informasi dan Komputer (HIMATIKOM) sebagai wadah dalam pengembangan dan pemberdayaan Mahasiswa teknologi Informasi dan Komputer dalam berorganisasi yang menjungjung tinggi rasa kekeluargaan.”</p>
                            </div>
                            <hr />
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Misi</h1>
                                <ul className="list-decimal pl-4">
                                    <li>Menjaga Kestabilan Pengembangan dan Pemberdayaan Di Dalam Himpunan Sesuai Dengan AD/ART</li>
                                    <li>Menyediakan Sarana Untuk Mendorong Kreativitas, Inovasi, Aspirasi, dan Kolaborasi Antar Anggota</li>
                                    <li>Meningkatkan Kualitas Proker dan Agenda Himpunan Demi Memperkuat Ikatan Kekeluargaan Pada Himpunan</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Makna Logo</h1>
                                <p className="text-justify w-full">VISI HIMATIKOM POLSUB KABINET OCTAGRAM “Mewujudkan Himpunan Mahasiswa Teknologi Informasi dan Komputer (HIMATIKOM) sebagai wadah dalam pengembangan dan pemberdayaan Mahasiswa teknologi Informasi dan Komputer dalam berorganisasi yang menjungjung tinggi rasa kekeluargaan.”</p>
                            </div>
                            <hr />
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Makna Warna</h1>
                                <ul className="list-decimal pl-4">
                                    <li>Biru melambangkan kedamaian, kejujuran dan percaya diri.</li>
                                    <li>Ungu melambangkan kreativitas dan kebijaksanaan.</li>
                                    <li>Merah Muda melambangkan kekeluargaan yang harmonis.</li>
                                    <li>Ketiga warna menyatu bermakna tentang keberanian yang tenang, penuh kasih, dan percaya diri.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default">Kepengurusan</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-zinc-900 gap-5">
                        {kepengurusans &&
                            kepengurusans.map((data, index) => {
                                return (
                                    <Dialog key={data.id}>
                                        <DialogTrigger>
                                            <div className="flex flex-col p-2 hover:scale-105 transition-transform duration-500 bg-zinc-900 rounded-lg">
                                                <Image src={data.poster as string} className="rounded-md mb-3" />
                                                <h1 className="font-bold text-center text-slate-100 mb-3">{data.name}</h1>
                                                <p className="text-slate-100 text-justify text-sm mb-3">{truncate(data.description, 10)}</p>
                                                <Button className="bg-secondary text-black hover:text-white">Detail</Button>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="bg-zinc-900 border-0 text-slate-100">
                                            <DialogHeader>
                                                <DialogTitle>{data.name}</DialogTitle>
                                                <Image src={data.poster as string} className="rounded-lg mb-[2rem]" />
                                                <DialogDescription className="flex flex-col gap-3">
                                                    <p className="text-justify text-slate-100">
                                                        {data.description}
                                                    </p>
                                                    <span className="text-slate-100">Periode : {data.periode}</span>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                )
                            })}
                    </div>
                </section>
            </div>
        </FrontLayout>
    );
}
export default Himpunan;
