import { Prodi } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import MainLayout from "@/Layouts/MainLayout";
import DataTable from "@/Components/DataTable";
import ProdiTableColumns from "@/Pages/Prodi/addon/Columns";
const PageProdi = ({ title, prodis }: { title: string; prodis: Prodi[]; }) => {

    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Program Studi</h1>
                    <Link href={route('admin.prodi.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                        Tambah Data
                    </Link>
                </div>
                <DataTable<Prodi, ColumnDef<Prodi>> columns={ProdiTableColumns} data={prodis} querySearch="name" />
            </div>
        </MainLayout>
    );
}
export default PageProdi;
