import { usePage, Head } from "@inertiajs/react";
import FrontLayout from "@/Layouts/FrontLayout";
import DataTable from "@/Components/DataTable";
import { Proker } from "@/types";
import { ColumnDef } from '@tanstack/react-table';
import FrontProkerTableColumn from "@/Pages/Front/Program/addon/Columns";
import Image from "@/Components/Image";
const PageProker = ({ title, prokers }: { title: string; prokers: Proker[] }) => {
    const user = usePage().props.auth.user
    return (
        <FrontLayout>
            <Head title={title} />
            <section className="mb-[3rem]">
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default my-5">Program Kerja</h1>
                <div className="grid grid-cols-1 rounded-lg justify-items-center">
                    <div className="flex flex-col p-2 rounded-lg justify-center items-center md:w-3/4 lg:w-3/4 w-full">
                        <Image src="/image/ba-proker.svg" className="bg-slate-100 rounded-lg shadow-md mb-[2rem]" />
                        {/* <h1 className="font-bold text-center text-2xl mb-3">Kabinet Octagram</h1> */}
                        <blockquote className="text-xl mb-2"> 🎉 Yuk, Daftar Program Kerja Himatikom! 🎉</blockquote>
                        <p className="text-justify md:w-1/2 lg:w-1/2 w-full mb-3">
                            Kamu mahasiswa aktif yang ingin pengalaman seru sekaligus bermanfaat? Program kerja Himatikom adalah jawabannya! Selain menambah skill dan memperluas jaringan, kamu juga bakal dapet Surat Keaktifan Mahasiswa yang sesuai dengan AD/ART HIMATIKOM pas banget buat mendukung kegiatan akademismu!
                        </p>
                        <hr />
                        <blockquote className="text-xl mb-3">❓❓ Apa aja sih keuntungannya ❓❓</blockquote>
                        <ul className="list-decimal mb-3">
                            <li>Pengalaman Organisasi yang seru dan menantang</li>
                            <li>Teman Baru dan jaringan yang luas</li>
                            <li>Sertifikat Keikutsertaan sebagai bukti kontribusi kamu</li>
                            <li>Surat Keaktifan Mahasiswa</li>
                        </ul>
                        <hr />
                        <blockquote className="text-justify md:w-1/2 lg:w-1/2 w-full mb-3">Jangan sampai ketinggalan, daftar sekarang dan wujudkan kontribusimu bersama Himatikom! Let’s grow and have fun together!</blockquote>
                    </div>
                </div>
            </section>
            <section className="mb-[3rem]">
                <div className="h-auto flex flex-col justify-center items-center px-3 md:px-[6rem] lg:px-[6rem] py-[3rem]">
                    <div className="w-full bg-white py-3 rounded-md p-5 shadow-md">
                        <h1 className="text-2xl font-bold">Daftar Kepanitiaan Program Kerja HIMATIKOM!</h1>
                        <DataTable<Proker, ColumnDef<Proker>> columns={FrontProkerTableColumn} data={prokers} querySearch="name" />
                    </div>
                </div>
            </section>
        </FrontLayout>
    )
}
export default PageProker;
