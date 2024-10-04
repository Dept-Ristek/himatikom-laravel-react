import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { Inbox } from "@/types";
import DataTable from "@/Components/DataTable";
import { ColumnDef } from '@tanstack/react-table';
import InboxTableColumn from "@/Pages/Inbox/addon/Columns";
const PageInbox = ({ title, inboxes }: { title: string; inboxes: Inbox[] }) => {
    return (
        <MainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl text-black font-bold">Tabel Saran & Masukan</h1>
                </div>
                <DataTable<Inbox, ColumnDef<Inbox>> columns={InboxTableColumn} data={inboxes} querySearch={"user_name"} />
            </div>
        </MainLayout>
    );
}
export default PageInbox;
