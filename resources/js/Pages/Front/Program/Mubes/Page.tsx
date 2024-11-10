import FrontLayout from "@/Layouts/FrontLayout";
import { Head, Link } from "@inertiajs/react";
import Image from "@/Components/Image";
import { Separator } from "@/Components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { ArrowRight } from "lucide-react";
import CampaignPemilihan from "@/Components/Campaign";

const PageMubes = ({ title }: { title: string }) => {
    return (
        <FrontLayout>
            <Head title={title} />
            <section className="mb-[3rem] flex flex-col justify-center items-center">
                <h1 className="text-3xl mt-[3rem] mb-4 text-center font-extrabold">Musyawarah Besar HIMATIKOM POLSUB 2024</h1>
                <Image src="/mubes/banner-mubes.jpg" className="object-cover rounded-lg" />

                <Separator className="w-3/4 mx-auto my-[1rem]"/>

                <div className="flex flex-col w-full mt-[1.5rem] gap-3 md:flex-row lg:flex-row md:w-3/4 lg:w-3/4 p-3 items-center">
                    <Image src="/mubes/poster-mubes.jpg" className="rounded-lg w-[28rem]" />
                    <div>
                        <h3 className="text-2xl text-center mb-3 w-full md:w-3/4 lg:w-3/4 mx-auto font-extrabold">Mewujudkan regenerasi pemimpin yang berkualitas, empati, dan dinamis demi mewujudkan organisasi yang berintegrasi</h3>
                        <p className="text-justify w-full md:w-3/4 lg:w-3/4 text-lg md:text-md lg:text-md mx-auto my-auto">Tema ini mengajak kita untuk merenungkan pentingnya pergantian kepemimpinan dalam suatu organisasi. Bukan sembarang pergantian, melainkan proses regenerasi yang bertujuan melahirkan pemimpin-pemimpin baru yang tidak hanya kompeten, namun juga memiliki empati dan jiwa kepemimpinan yang dinamis. Pemimpin seperti inilah yang diharapkan mampu membawa organisasi menuju arah yang lebih baik, dengan integritas sebagai kompasnya. Dengan kata lain, tema ini mendorong kita untuk membangun organisasi yang tidak hanya efektif dan efisien, tetapi juga menjunjung tinggi nilai-nilai luhur seperti kejujuran, transparansi, dan akuntabilitas. Proses regenerasi ini bukan sekadar pergantian posisi, melainkan investasi jangka panjang untuk memastikan keberlangsungan dan pertumbuhan organisasi yang berkelanjutan. Melalui regenerasi pemimpin yang berkualitas, diharapkan organisasi dapat terus beradaptasi dengan perubahan zaman, merespons kebutuhan masyarakat, dan mencapai tujuan-tujuan strategis yang telah ditetapkan.
                        </p>
                    </div>
                </div>

                <Separator className="w-3/4 mx-auto my-[1rem]"/>

                <h1 className="text-3xl mt-[3rem] mb-4 text-center font-extrabold">🔥 OUR CANDIDATES 🔥</h1>
                <div className="flex flex-col w-full mt-[1.5rem] gap-3 md:flex-row lg:flex-row md:w-3/4 lg:w-3/4 p-3 items-center justify-evenly">

                    {/* Paslon 1 */}
                    <div>
                    <Dialog>
                            <DialogTrigger>
                                <Image src="/mubes/paslon1.jpg" className="rounded-lg w-[28rem] hover:scale-105 transition-transform duration-500" />
                            </DialogTrigger>
                            <DialogContent className="border-0">
                                <ScrollArea className="h-[45rem]">
                                    <DialogHeader>
                                        <DialogTitle className="mb-3">Ardy Damar Amalludin & Tegar Kusuma</DialogTitle>
                                        <Image src="/mubes/paslon1.jpg" className="rounded-lg w-[28rem] mx-auto" />
                                        <DialogDescription className="flex flex-col gap-3">
                                            <div className="my-3">
                                                <h3 className="text-xl text-zinc-900 font-bold text-center">Visi</h3>
                                                <p className="text-justify text-zinc-900">
                                                Mengembangkan himpunan mahasiswa Teknologi Informasi dan Komputer yang berguna untuk membantu mengembangkan kreatifitas, kerja sama, dan kebersamaan. Tujuannya adalah untuk menghasilkan mahasiswa yang kompeten, kreatif, dan terhubung dengan alumni serta himpunan lain.</p>
                                            </div>
                                            <div className="my-3">
                                                <h3 className="text-xl text-zinc-900 font-bold text-center">Misi</h3>
                                                <ul className="list-decimal pl-4 text-justify text-zinc-900">
                                                    <li>Menciptakan hubungan yang baik atara mahasiswa, alumni, dan himpunan lain.</li>
                                                    <li>Mengadakan kegiatan untuk meningkatkan keterampilan dan kebersamaan mahasiswa.</li>
                                                    <li>Menjadi wadah aspirasi dan dukungan bagi mahasiswa Teknologi Informasi dan Komputer.</li>
                                                </ul>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </ScrollArea>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Paslon 2 */}
                    <div>
                    <Dialog>
                            <DialogTrigger>
                                <Image src="/mubes/paslon2.jpg" className="rounded-lg w-[28rem] hover:scale-105 transition-transform duration-500" />
                            </DialogTrigger>
                            <DialogContent className="border-0">
                                <ScrollArea className="h-[45rem]">
                                    <DialogHeader>
                                        <DialogTitle className="mb-3">Baraja Putra & Ridho Hasbi Ashiddiq</DialogTitle>
                                        <Image src="/mubes/paslon2.jpg" className="rounded-lg w-[28rem] mx-auto" />
                                        <DialogDescription className="flex flex-col gap-3">
                                            <div className="my-3">
                                                <h3 className="text-xl text-zinc-900 font-bold text-center">Visi</h3>
                                                <p className="text-justify text-zinc-900">
                                                Menjadikan Himpunan Mahasiswa Teknologi Informasi dan Komputer (HIMATIKOM) sebagai ruang yang dinamis, inklusif, ekspresif, dan inovatif untuk berekspresi dan berinovasi, serta meningkatkan konsistensi gerakan pengkaderan yang efektif dan unggul.</p>
                                            </div>
                                            <div className="my-3">
                                                <h3 className="text-xl text-zinc-900 font-bold text-center">Misi</h3>
                                                <ul className="list-decimal pl-4 text-justify text-zinc-900">
                                                    <li>Menjadikan HIMATIKOM sebagai wadah untuk mengoptimalkan minat, bakat, dan potensi mahasiswa JTIK.</li>
                                                    <li>⁠Meningkatkan rasa kebersamaan dan kepedulian antar mahasiswa JTIK POLSUB.</li>
                                                    <li>Menjalin kerja sama dan membangun relasi dengan berbagai pihak, baik internal maupun eksternal.</li>
                                                    <li>Menciptakan lingkungan organisasi yang nyaman dengan suasana 3S (Santai, Serius, Selesai).</li>
                                                </ul>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </ScrollArea>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <Separator className="w-3/4 mx-auto my-[1rem]"/>

                <CampaignPemilihan />
            </section>
        </FrontLayout>
    );
}
export default PageMubes;
