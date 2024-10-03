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
import { Link } from "@inertiajs/react";
import { Blog } from '@/types';
import Image from "@/Components/Image";
import DialogDeleteKepengurusan from "@/Pages/Kepengurusan/addon/DialogDelete";
const BlogTableColumn: ColumnDef<Blog>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Judul
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const blog = row.original
            return (
                <Image src={blog.image as string} className="w-[300px] h-[100px] object-cover rounded-md" />
            );
        }
    },
    {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => {
            const blog = row.original
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
                        <Link href={route('admin.blog.edit', blog.id)}>
                            <DropdownMenuItem>
                                Edit
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem asChild>
                            <AlertDialog>
                                <AlertDialogTrigger className="text-sm text-left rounded-md w-full p-2 hover:bg-slate-100">Hapus</AlertDialogTrigger>
                                {/* <DialogDeleteKepengurusan kepengurusan={blog} /> */}
                            </AlertDialog>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu >
            )
        },
    },
];
export default BlogTableColumn;
