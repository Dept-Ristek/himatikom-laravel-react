import { Head, Link } from "@inertiajs/react";
import { Pengurus } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import MainLayout from "@/Layouts/MainLayout";
import DataTable from "@/Components/DataTable";
import PengurusTableColumn from "@/Pages/Pengurus/addon/Columns";

interface PagePengurusProps {
    title: string;
    pengurus: Pengurus[];
}

const PagePengurus = ({ title, pengurus }: PagePengurusProps) => {
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Kepengurusan</h1>
                    <div className="flex flex-row gap-3">
                        <Link href={route('admin.pengurus.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                            Tambah Data
                        </Link>
                    </div>
                </div>
                <DataTable<Pengurus, ColumnDef<Pengurus>> columns={PengurusTableColumn} data={pengurus} querySearch={"user_nim"} />
            </div>
        </MainLayout>
    );
}
export default PagePengurus;
