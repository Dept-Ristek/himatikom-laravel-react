import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

export default function CampaignPemilihan() {
    return (
        <Link href={route('v2.mubes.pemilihan')} className="w-3/4">
            <div className="flex shadow-lg rounded-lg p-3 bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-teal-500 to-90% justify-between items-center hover:scale-105 transition-transform duration-500">
                <h1 className="text-xl p-3 text-white">Suara mu adalah kekuatan untuk perubahan positif! Lakukan pemilihan sekarang!</h1>
                <ArrowRight className="text-white"/>
            </div>
        </Link>
    );
}
