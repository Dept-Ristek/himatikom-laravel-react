import { Head, Link } from "@inertiajs/react";
import { Kepengurusans } from '@/Pages/Kepengurusan/types';
import { ColumnDef } from "@tanstack/react-table";
import MainLayout from "@/Layouts/MainLayout";
import DataTable from "@/Components/DataTable";
import KepengurusanTableColumn from "@/Pages/Kepengurusan/addon/Columns";
interface PageKepengurusanProps {
    title: string;
    kepengurusans: Kepengurusans
}
const PageKepengurusan = ({ title, kepengurusans }: PageKepengurusanProps) => {
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Kepengurusan</h1>
                    <div className="flex flex-row gap-3">
                        <Link href={route('admin.kepengurusan.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                            Tambah Data
                        </Link>
                    </div>
                </div>
                <DataTable<Kepengurusans, ColumnDef<Kepengurusans>> columns={KepengurusanTableColumn} data={kepengurusans} querySearch={"name"} />
            </div>
        </MainLayout>
    );
}
export default PageKepengurusan;
