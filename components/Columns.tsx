"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
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
} from "./ui/alert-dialog"
import Toast from "./Toast";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { updateStokBarang } from "@/lib/actions";


export type Barang = {
  id: number | null;
  namaBarang: string | null;
  tipeBarang: string | null;
  stokBarang: number | null;
};

export const Columns: ColumnDef<Barang>[] = [
  {
    header: "ID",
    cell: ({ row }) => {
      return row.index + 1
    }
  },
  {
    accessorKey: "namaBarang",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Barang
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "tipeBarang",
    header: "Tipe Barang",
  },
  {
    accessorKey: "stokBarang",
    header: "Stok Barang",
  },
  {
    id: "menu",
    header: "Menu",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <AlertDialog>
            <AlertDialogTrigger className="bg-rose-50 text-red-600 p-2 rounded-lg w-full text-center hover:bg-white hover:text-black duration-500 border">Hapus</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
                <AlertDialogDescription>
                  Tindakan ini tidak dapat dibatalkan. Ini akan secara permanen menghapus barang Anda
                  dan menghilangkan datanya dari inventaris kami.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batalkan</AlertDialogCancel>
                <AlertDialogAction className="bg-indigo-50 text-blue-600 p-2 rounded-lg text-center hover:bg-white hover:text-black duration-500 border">
                  <Toast id={row.original.id!} />
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-amber-50 text-yellow-600 p-2 rounded-lg w-full text-center hover:bg-white hover:text-black duration-500 border">Edit Stok</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form action={updateStokBarang}>
                <DialogHeader>
                  <DialogTitle>Edit Stok barang</DialogTitle>
                  <DialogDescription>
                    Lakukan perubahan pada stok barang Anda di sini. Klik simpan setelah selesai.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="stokBarang" className="text-right">
                      Stok
                    </Label>
                    <Input className="hidden" id="id" name="id" value={row.original.id!} hidden />
                    <Input autoFocus id="stokBarang" name="stokBarang" type="number" placeholder={row.original.stokBarang!.toString()} className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose><Button type="submit">Save changes</Button></DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )
    }
  },
];
