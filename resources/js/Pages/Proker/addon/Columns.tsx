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
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Proker } from "@/types";
import { Link } from "@inertiajs/react";
const ProkerTableColumn: ColumnDef<Proker>[] = [
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
        accessorKey: "kepengurusan.name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Departement
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "is_proker",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Proker/Agenda
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const proker = row.original;
            return (
                <h1 className="text-md font-bold">{proker.is_proker ? "Proker" : "Agenda"}</h1>
            );
        }
    },
    {
        accessorKey: "schedule",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Jadwal
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const proker = row.original;
            return (
                <h1 className="text-md font-bold">{Intl.DateTimeFormat('id-ID', {
                    year: 'numeric',
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                }).format(new Date(proker?.schedule as string | Date | number))}</h1>
            );
        }
    },
    {
        accessorKey: "schedule",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Ada Kepanitiaan
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const proker = row.original;
            return (
                <div className="flex flex-row gap-3 items-center">
                    <h1 className="text-md font-bold">{proker.need_to_register ? "Ya" : "Tidak"}</h1>
                </div>
            );
        }
    },
    {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => {
            const proker = row.original
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
                        <Link href={route('admin.proker.edit', proker.id)}>
                            <DropdownMenuItem>
                                Edit
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem asChild>
                            <AlertDialog>
                                <AlertDialogTrigger className="text-sm text-left rounded-md w-full p-2 hover:bg-slate-100">Hapus</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Menghapus data secara permanen memungkinkan anda tidak dapat mengembalikan data yang telah dihapus
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Batal</AlertDialogCancel>
                                        <Link href={route('admin.proker.delete', proker.id)} method="delete" as="button">
                                            <AlertDialogAction className="bg-red-600">Hapus</AlertDialogAction>
                                        </Link>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu >
            )
        },
    },
]
export default ProkerTableColumn;
