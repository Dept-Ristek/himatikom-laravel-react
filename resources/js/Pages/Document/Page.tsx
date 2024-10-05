import { Document } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { ColumnDef } from '@tanstack/react-table';
import DataTable from "@/Components/DataTable";
import DocumentTableColumn from "@/Pages/Document/addon/Columns";

const PageDocument = ({ title, documents }: { title: string; documents: Document[] }) => {
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Dokumen</h1>
                    <div className="flex flex-row gap-3">
                        <Link href={route('admin.document.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                            Tambah Data
                        </Link>
                    </div>
                </div>
                <DataTable<Document, ColumnDef<Document>> columns={DocumentTableColumn} data={documents} querySearch={"name"} />
            </div>
        </MainLayout>
    );
}
export default PageDocument;
