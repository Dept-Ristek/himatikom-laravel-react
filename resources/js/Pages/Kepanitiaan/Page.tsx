import { Kepanitiaan } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import MainLayout from "@/Layouts/MainLayout";
import KepanitiaanTableColumn from "@/Pages/Kepanitiaan/addon/Columns";
import DataTable from "@/Components/DataTable";

interface PageKepanitiaanProps {
    title: string;
    kepanitiaans: Kepanitiaan[]
}

const PageKepanitiaan = ({ title, kepanitiaans }: PageKepanitiaanProps) => {
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Kepanitiaan</h1>
                    <div className="flex flex-row gap-3">
                        <Link href={route('admin.kepanitiaan.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                            Tambah Data
                        </Link>
                    </div>
                </div>
                <DataTable<Kepanitiaan, ColumnDef<Kepanitiaan>> columns={KepanitiaanTableColumn} data={kepanitiaans} querySearch="name" />
            </div>
        </MainLayout>
    );
}
export default PageKepanitiaan;
