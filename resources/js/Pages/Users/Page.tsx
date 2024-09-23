import { Head, Link } from "@inertiajs/react";
import { User } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import MainLayout from "@/Layouts/MainLayout";
import UserTableColumn from '@/Pages/Users/addon/Columns';
import DataTable from "@/Components/DataTable";

interface PageUsersProps {
    title: string;
    users: User[]
}

const PageUsers = ({ title, users }: PageUsersProps) => {
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Users</h1>
                    <div className="flex flex-row gap-3">
                        <Link href={route('admin.user.import')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                            Import User
                        </Link>
                        <Link href={route('admin.user.create')} className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
                            Tambah Data
                        </Link>
                    </div>
                </div>
                <DataTable<User, ColumnDef<User>> columns={UserTableColumn} data={users} querySearch={"nim"} />
            </div>
        </MainLayout>
    );
}
export default PageUsers;
