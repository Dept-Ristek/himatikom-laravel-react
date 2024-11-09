import FrontLayout from "@/Layouts/FrontLayout";
import { Head } from "@inertiajs/react";
import Image from "../../../../Components/Image";

const PageMubes = ({ title }: { title: string }) => {
    return (
        <FrontLayout>
            <Head title={title} />
            <section className="mb-[3rem] flex flex-col justify-center items-center">
                <h1 className="text-3xl my-[3rem] text-center">Musyawarah Besar HIMATIKOM POLSUB 2024</h1>
                <Image src="/mubes/banner-mubes.jpg" className="object-cover rounded-lg" />
                <div className="flex flex-col w-full mt-[1.5rem] gap-3 md:flex-row lg:flex-row md:w-3/4 lg:w-3/4 p-3 items-center">
                    <Image src="/mubes/poster-mubes.jpg" className="rounded-lg w-[25rem]" />
                    <div>
                        <h3 className="text-2xl text-center mb-3 w-full md:w-3/4 lg:w-3/4 mx-auto font-extrabold">Mewujudkan regenerasi pemimpin yang berkualitas, empati, dan dinamis demi mewujudkan organisasi yang berintegrasi</h3>
                        <p className="text-justify w-full md:w-3/4 lg:w-3/4 text-lg md:text-md lg:text-md mx-auto my-auto">Tema ini mengajak kita untuk merenungkan pentingnya pergantian kepemimpinan dalam suatu organisasi. Bukan sembarang pergantian, melainkan proses regenerasi yang bertujuan melahirkan pemimpin-pemimpin baru yang tidak hanya kompeten, namun juga memiliki empati dan jiwa kepemimpinan yang dinamis. Pemimpin seperti inilah yang diharapkan mampu membawa organisasi menuju arah yang lebih baik, dengan integritas sebagai kompasnya. Dengan kata lain, tema ini mendorong kita untuk membangun organisasi yang tidak hanya efektif dan efisien, tetapi juga menjunjung tinggi nilai-nilai luhur seperti kejujuran, transparansi, dan akuntabilitas. Proses regenerasi ini bukan sekadar pergantian posisi, melainkan investasi jangka panjang untuk memastikan keberlangsungan dan pertumbuhan organisasi yang berkelanjutan. Melalui regenerasi pemimpin yang berkualitas, diharapkan organisasi dapat terus beradaptasi dengan perubahan zaman, merespons kebutuhan masyarakat, dan mencapai tujuan-tujuan strategis yang telah ditetapkan.
                        </p>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
export default PageMubes;
