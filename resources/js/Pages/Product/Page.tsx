import { Product } from "@/types";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { ColumnDef } from '@tanstack/react-table';
import DataTable from "@/Components/DataTable";
import ProductTableColumns from "@/Pages/Product/addon/Columns";

const PageProduct = ({ title, products }: { title: string; products: Product[] }) => {
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Produk</h1>
                    <Link href={route('admin.product.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                        Tambah Data
                    </Link>
                </div>
                <DataTable<Product, ColumnDef<Product>> columns={ProductTableColumns} data={products} querySearch="name" />
            </div>
        </MainLayout>
    )
}
export default PageProduct;
