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
    const DEFAULT_BLOG_IMAGE = '/image/preview.jpg';
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
            <div className="h-auto flex flex-col justify-center items-center px-5 md:px-[6rem] lg:px-[6px] py-[3rem]">
                <section className="mb-[3rem]">
                    <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default">Kabinet</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 rounded-lg justify-items-center">
                        <div className="flex flex-col p-2 rounded-lg justify-center items-center bg-white md:w-3/4 lg:w-3/4 w-full md:justify-self-end lg:justify-self-end justify-self-center shadow-md">
                            <Image src="/icon/cakravikasa-nonbg.png" className=" w-[30rem] rounded-md" />
                            <h1 className="font-bold text-center text-2xl mb-3">Kabinet Caravikasa</h1>
                            <p className="text-justify md:w-3/4 lg:w-3/4 w-full mb-3">Kabinet Cakravikasa dapat diartikan sebagai kabinet yang bergerak dinamis dan terus berkembang. Nama ini menggambarkan "HIMATIKOM" yang selalu berputar dan bergerak maju, berinovasi, serta berkembang menuju kemajuan yang berkelanjutan dan konsisten.</p>
                        </div>
                        <div className="flex flex-col p-5 rounded-lg bg-white md:w-3/4 lg:w-3/4 w-full md:justify-self-start lg:justify-self-start justify-self-center shadow-md">
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Visi</h1>
                                <p className="text-justify w-full">VISI HIMATIKOM POLSUB KABINET CARAVIKASA “Menjadikan Himpunan Mahasiswa Teknologi Informasi dan Komputer (HIMATIKOM) sebagai ruang yang dinamis, inklusif, ekspresif, dan inovatif untuk berekspresi dan berinovasi, serta meningkatkan konsistensi gerakan pengkaderan yang efektif dan unggul.”</p>
                            </div>
                            <hr />
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Misi</h1>
                                <ul className="list-decimal pl-4">
                                    <li>Menjadikan HIMATIKOM sebagai wadah untuk mengoptimalkan minat, bakat, dan potensi mahasiswa JTIK. </li>
                                    <li>Meningkatkan rasa kebersamaan dan kepedulian antar mahasiswa JTIK POLSUB.</li>
                                    <li>Menjalin kerja sama dan membangun relasi dengan berbagai pihak, baik internal maupun eksternal.</li>
                                    <li>Menciptakan lingkungan organisasi yang nyaman dengan suasana 3S (Santai, Serius, Selesai)</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Makna Logo</h1>
                                <p className="text-justify w-full">Kabinet Cakravikasa dapat diartikan sebagai kabinet yang bergerak dinamis dan terus
berkembang. Nama ini menggambarkan "HIMATIKOM" yang selalu berputar dan bergerak
maju, berinovasi, serta berkembang menuju kemajuan yang berkelanjutan dan konsisten.
(“cakra” yang artinya roda atau pusat energi, dan “vikasa” yang artinya mekar atau
berkembang).</p>
                            </div>
                            <hr />
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Nilai Kebudayaan HIMATIKOM</h1>
                                <ul className="list-decimal pl-4">
                                    <li>Himpunan Mahasiswa Teknologi Informasi dan Komputer berdiri berasaskan kekeluargaan
dimana setiap anggota merasa sebagai satu keluarga dan merasakan kebersamaan di dalam
HIMATIKOM.</li>
                                    <li>Setiap permasalahan yang terjadi di himpunan harus dibicarakan dan dicarikan solusi dari
permasalahan tersebut secara kekeluargaan.</li>
                                    <li>Ketika terjadinya regenerasi seluruh keluarga besar HIMATIKOM tidak diperbolehkan
memanggil mahasiswa baru dengan sebutan MABA, disarankan memanggil dengan
sebutan adik atau nama personal.</li>
                                    <li>Seluruh bagian yang menjadi keluarga besar HIMATIKOM disarankan untuk saling
menyapa atau memanggil dengan sebutan “Kakak, “Aa”, atau “Teteh” kepada yang lebih
tua, begitupun sebaliknya disarankan untuk menyapa dan memanggil “Adik” atau nama
personal kepada yang lebih muda.</li>
                                <li>Melakukan rutinitas berkumpul untuk melakukan makan bersama (Iiwetan) atau hanya
                                    sekedar ngopi untuk menjalin kebersamaan dan meningkatkan chemistry.</li>
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
                                                {/* <Image src={DEFAULT_BLOG_IMAGE}/> */}


                                                <h1 className="font-bold text-center text-slate-100 mb-3">{data.name}</h1>
                                                <p className="text-slate-100 text-justify text-sm mb-3">{truncate(data.description, 10)}</p>
                                                <Button className="bg-secondary text-black hover:text-white">Detail</Button>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="bg-zinc-900 border-0 text-slate-100 max-h-[85vh] overflow-y-auto no-scrollbar">
                                            <style>
                                                {`
                                                  .no-scrollbar::-webkit-scrollbar {
                                                      display: none;
                                                  }
                                                  .no-scrollbar {
                                                      -ms-overflow-style: none;
                                                      scrollbar-width: none;
                                                  }
                                                `}
                                            </style>

                                            <DialogHeader>
                                                <DialogTitle>{data.name}</DialogTitle>
                                                <Image src={data.poster as string} className="rounded-lg mb-[2rem]" />
                                                {/* <Image src={DEFAULT_BLOG_IMAGE}/> */}


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
