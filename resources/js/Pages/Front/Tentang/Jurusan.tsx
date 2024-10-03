import FrontLayout from "@/Layouts/FrontLayout";
import { Head } from "@inertiajs/react";
import Image from "../../../Components/Image";
const FrontJurusan = ({ title }: { title: string }) => {
    return (
        <FrontLayout>
            <Head title={title} />
            <section className="mb-[3rem]">
                <h1 className="font-extrabold text-3xl text-center mb-5 cursor-default my-5">Jurusan Teknologi Informasi dan Komputer</h1>
                <div className="grid grid-cols-1 rounded-lg justify-items-center">
                    <div className="flex flex-col p-2 rounded-lg justify-center items-center md:w-4/5 lg:w-4/5 w-full">
                        <Image src="/image/jtik.jpg" className="rounded-md mb-[3rem]" />
                        <div className="flex flex-col p-5 rounded-lg lg:w-3/5 md:w-3/5 w-full md:justify-self-start lg:justify-self-start justify-self-center">
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Visi</h1>
                                <p className="text-justify w-full">Pada tahun 2030 menjadi salah satu Program Studi terbaik di Bidang Manajemen Informatika secara nasional untuk mendukung perkembangan industri</p>
                            </div>
                            <hr className="my-3" />
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Misi</h1>
                                <ul className="list-decimal pl-4">
                                    <li>Menyelenggarakan proses pembelajaran berkualitas dengan peningkatan berkelanjutan yang relevan dengan kebutuhan pemangku kepentingan dalam bidang sistem informasi.</li>
                                    <li>Mengembangkan penelitian terapan di bidang sistem informasi.</li>
                                    <li>Melaksanakan kegiatan pengabdian kepada masyarakat dibidang sistem informasi untuk meningkatkan sumber daya dan kesejahteraan masyarakat.</li>
                                    <li>Mengembangkan kerjasama dengan industri, asosiasi, dan institusi, guna menghasilkan mutu lulusan dan sumber daya manusia yang profesional, berjiwa wirausaha dan berkarakter.</li>
                                </ul>
                            </div>
                            <hr className="my-3" />
                            <div className="mb-3">
                                <h1 className="font-bold text-2xl">Tujuan</h1>
                                <ul className="list-decimal pl-4">
                                    <li>
                                        Menghasilkan tenaga profesional di bidang manajemen informatika yang memiliki sikap dan kemampuan sebagai berikut:
                                        <ol className="list-inside list-disc">
                                            <li>Beradaptasi terhadap perkembangan teknologi informasi</li>
                                            <li>Berfikir kreatif, analitis, dan sistematis</li>
                                            <li>Berwirausaha</li>
                                            <li>Bermoral</li>
                                            <li>Disiplin</li>
                                        </ol>
                                    </li>
                                    <li>Menghasilkan penelitian terapan yang inovatif di bidang manajemen informatika.</li>
                                    <li>Menghasilkan pengabdian masyarakat yang berkualitas untuk meningkatkan kompetensi masyarakat.</li>
                                    <li>Menghasilkan hubungan kerja sama yang saling menguntungkan dengan pihak industri, asosiasi, dan institusi.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
export default FrontJurusan;
