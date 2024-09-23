import { Proker } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import MainLayout from "@/Layouts/MainLayout";
import DataTable from "@/Components/DataTable";
import ProkerTableColumn from "@/Pages/Proker/addon/Columns";

interface PageProkerProps {
    title: string;
    prokers: Proker[];
}

const PageProker = ({ title, prokers }: PageProkerProps) => {
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-full'>
                <div className="flex flex-row justify-between gap-1">
                    <h1 className="text-2xl text-black font-bold">Tabel Proker dan Agenda</h1>
                    <Link href={route('admin.proker.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                        Tambah Data
                    </Link>
                </div>
                <DataTable<Proker, ColumnDef<Proker>> columns={ProkerTableColumn} data={prokers} querySearch="name" />
            </div>
        </MainLayout>
    );
}
export default PageProker;
