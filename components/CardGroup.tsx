import Database from "@/lib/db";
import CardComponent from "./Card";

async function getCountBarang() {
    const countBarang = await Database.barang.count();
    return countBarang
}

export default async function CardGroup() {
    const countBarang = await getCountBarang();

    return (
        <>
            <CardComponent CardDescription='JUMLAH BARANG YANG TERSEDIA SAAT INI' CardTitle={countBarang} Link='Tambahkan Barang' Path='/admin/barang' />
            <CardComponent CardDescription='JUMLAH PEMINJAMAN BULAN INI' CardTitle={0} Link='Lihat Riwayat' Path='/admin/riwayat' />
        </>
    )
}
