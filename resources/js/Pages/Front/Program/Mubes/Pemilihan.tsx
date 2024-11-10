import { useEffect, useState } from "react";
import FrontLayout from "@/Layouts/FrontLayout";
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/Components/ui/toaster";
import Image from "@/Components/Image";
import { Button } from "@/Components/ui/button";
import Swal from "sweetalert2";

const PagePemilihan = ({ title }: { title: string }) => {
    const { toast } = useToast();
    const [allowed, setAllowed] = useState<boolean>(false);
    const [token, setToken] = useState<string>();
    const onScan = async (res: any) => {
        // console.log(res[0].rawValue);
        try {
            const response = await axios.get(route('v2.mubes.token.check', {
                token: res[0].rawValue
            }))
            if (response.data.status == 500) {
                toast({
                    title: response.data.title,
                    description: response.data.message
                });
            }
            if (!response.data.status) {
                setAllowed(true);
                setToken(response.data.token);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleChoose = async (id: number) => {
        try {
            const response = await axios.post(route('v2.mubes.pemilihan.store'), {
                token: token,
                id: id
            });
            if (response.status == 200) {
                Swal.fire({
                    title: response.data.title,
                    text: response.data.message,
                    icon: 'success'
                }).then((e) => {
                    if (e.isConfirmed) {
                        window.location.reload();
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    return allowed == false && !token ? (
        <div className="flex items-center justify-center h-screen">
            <Head title={title} />
            <Toaster />
            {/*  */}
            <div className="w-[30rem] h-30rem">
                <Toaster />
                <Scanner onScan={onScan} onError={(error) => console.log(error)} />
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-center h-screen">
        <Head title={title} />
            <Toaster />
            <div className="flex flex-row justify-evenly w-full">
                <div className="grid">
                    <Image src="/mubes/paslon1.jpg" className="w-[30rem] rounded-lg mb-3" />
                    <Button className="bg-primary hover:scale-105 transition-transform duration-500 h-12" onClick={(e) => handleChoose(1)}>Pilih</Button>
                </div>
                <div className="grid">
                    <Image src="/mubes/paslon2.jpg" className="w-[30rem] rounded-lg" />
                    <Button className="bg-primary hover:scale-105 transition-transform duration-500 h-12" onClick={(e) => handleChoose(2)}>Pilih</Button>
                </div>
            </div>
        </div>
    )
}


const PagePemilihanUtama = () => {

}


export default PagePemilihan;
