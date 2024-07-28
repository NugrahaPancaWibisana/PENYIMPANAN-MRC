import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";
import { deleteBarang } from "@/lib/actions";

type props = {
    id: number
}

export default function Toast({ id }: props) {
    const { toast } = useToast();

    return (
        <p className="w-full h-full"
            onClick={async () => {
                try {
                    await deleteBarang(id);
                    toast({
                        title: "Barang Berhasil Dihapus",
                        description: "Silahkan refresh halaman anda",
                        action: <ToastAction autoFocus altText="Refresh" onClick={() => window.location.reload()}>Refresh</ToastAction>
                    });
                } catch (error) {
                    toast({
                        title: "Kesalahan",
                        description: "Gagal menghapus barang",
                        variant: "destructive",
                    });
                    console.error(error);
                }
            }}
        >
            Lanjutkan
        </p>
    )
}
