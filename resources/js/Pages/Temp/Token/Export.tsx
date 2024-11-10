import { Token } from "@/types";
import { Head } from "@inertiajs/react";
import { useEffect } from "react";
import QRCode from "react-qr-code";

const ExportToken = ({ title, tokens }: { title: string; tokens: Token[] }) => {

    useEffect(() => {
        window.print()
    }, [])

    return (
        <>
            <Head title={title} />
            <div className="grid grid-cols-3 gap-[3rem] justify-center items-center">
            {
            tokens &&
            tokens.map((data, index) => {
                return (
                    <div className="grid" key={data.token}>
                        <QRCode value={data.token} className="w-full" />
                        <h4 className="text-xl text-center mt-2">{data.token}</h4>
                    </div>
                )
            })}
            </div>
        </>
    );
}
export default ExportToken;
