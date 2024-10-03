import { Blog } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnDef } from '@tanstack/react-table';
import MainLayout from "@/Layouts/MainLayout";
import DataTable from "@/Components/DataTable";
import BlogTableColumn from "@/Pages/Blog/addon/Columns";

const PageBlog = ({ title, blogs }: { title: string; blogs: Blog[] }) => {
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Berita HIMATIKOM</h1>
                    <div className="flex flex-row gap-3">
                        <Link href={route('admin.blog.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                            Tambah Data
                        </Link>
                    </div>
                </div>
                <DataTable<Blog, ColumnDef<Blog>> columns={BlogTableColumn} data={blogs} querySearch={"name"} />
            </div>
        </MainLayout>
    );
}
export default PageBlog;
