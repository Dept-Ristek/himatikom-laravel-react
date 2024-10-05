import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { ArrowUpDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Prodi } from "@/types";
import { Link } from "@inertiajs/react";
import DialogDelete from "@/Components/DialogDelete";
const ProdiTableColumns: ColumnDef<Prodi>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nama
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => {
            const prodi = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href={route('admin.prodi.edit', prodi.id)}>
                            <DropdownMenuItem>
                                Edit
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem asChild>
                            <AlertDialog>
                                <AlertDialogTrigger className="text-sm text-left rounded-md w-full p-2 hover:bg-slate-100">Hapus</AlertDialogTrigger>
                                <DialogDelete id={prodi.id as string} url="admin.prodi.destroy" />
                            </AlertDialog>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu >
            )
        },
    },
]
export default ProdiTableColumns;
