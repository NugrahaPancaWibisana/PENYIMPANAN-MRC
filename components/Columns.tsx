"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react"

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


export type Barang = {
  id: number | null;
  namaBarang: string | null;
  tipeBarang: string | null;
  stokBarang: number | null;
};

export const Columns: ColumnDef<Barang>[] = [
  {
    header: "ID",
    cell: ({row}) => {
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
                <AlertDialogAction>
                  <Toast id={row.original.id!} />
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button className="bg-amber-50 text-yellow-600 p-2 rounded-lg w-full text-center hover:bg-white hover:text-black duration-500 border">Edit</Button>
        </div>
      )
    }
  },
];
