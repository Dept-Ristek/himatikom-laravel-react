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
const FrontProkerTableColumn: ColumnDef<Proker>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nama Proker
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
                    Proker Dari
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
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
        accessorKey: "start_register",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Oprec
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const proker = row.original;
            return (
                <h1 className="text-md font-bold">{Intl.DateTimeFormat('id-ID', {
                    year: 'numeric',
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                }).format(new Date(proker?.start_register as string | Date | number))} - {Intl.DateTimeFormat('id-ID', {
                    year: 'numeric',
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                }).format(new Date(proker?.end_register as string | Date | number))}</h1>
            );
        }
    },
    {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => {
            const proker = row.original
            return (
                <Link href={route('v2.front.index')}>
                    <Button>Daftar</Button>
                </Link>
            )
        },
    },
]
export default FrontProkerTableColumn;
