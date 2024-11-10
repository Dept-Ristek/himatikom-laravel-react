import { Head, Link } from "@inertiajs/react";
import TempMainLayout from "@/Layouts/TempMainLayout";
import DataTable from "@/Components/DataTable";
import { Token } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import TokenTableColumn from "@/Pages/Temp/Token/addon/Column";

const PageTempToken = ({ title, tokens }: { title: string; tokens: Token[] }) => {
    return (
        <TempMainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Token Pemilihan</h1>
                    <div className="flex flex-row gap-2">
                        <a href={route('admin.token.export')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm" target="_blank">
                            Export
                        </a>
                        <Link href={route('admin.token.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                            Tambah Data
                        </Link>
                    </div>
                </div>
                <DataTable<Token, ColumnDef<Token>> columns={TokenTableColumn} data={tokens} querySearch="token" />
            </div>
        </TempMainLayout>
    );
}
export default PageTempToken;
