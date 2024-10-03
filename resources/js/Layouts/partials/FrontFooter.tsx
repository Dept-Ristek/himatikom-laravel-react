import Image from '@/Components/Image';
import { Link } from '@inertiajs/react';
import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
const FrontFooter = () => {
    return (
        <div className="bg-zinc-900 py-5 lg:px-[6rem] md:px-[6rem] px-5 flex flex-col md:flex-row lg:flex-row flex-wrap text-white justify-between gap-3">
            <div className="flex flex-row flex-wrap gap-3">
                <Image src="/icon/logo-himatikom.png" className="w-[40px] h-[40px]" />
                <Image src="/icon/octagram-with-border-radius.png" className="h-[40px]" />
            </div>
            <div className="flex flex-col gap-1">
                <h1>{new Date().getFullYear()} &copy; <Link href="https://github.com/Dept-Ristek/">Departemen Riset dan Teknologi.</Link></h1>
                <div className="flex flex-row gap-3">
                    <Link href="https://www.instagram.com/himatikom.polsub">
                        <FaInstagram />
                    </Link>
                    <Link href="https://www.tiktok.com/@himatikom_polsub">
                        <FaTiktok />
                    </Link>
                    <Link href="https://www.youtube.com/@mipolsubofficial7516">
                        <FaYoutube />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default FrontFooter;
