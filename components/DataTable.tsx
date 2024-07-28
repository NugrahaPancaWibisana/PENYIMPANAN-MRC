import { getBarang } from '@/lib/actions';
import { Columns } from './Columns';
import { DataTableBarang } from "./DataTableBarang";

export default async function DataTable() {
    const data = await getBarang();
    return (
        <><DataTableBarang columns={Columns} data={data} /></>
    )
}
