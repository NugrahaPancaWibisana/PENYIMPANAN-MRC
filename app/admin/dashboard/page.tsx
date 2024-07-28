import Navbar from '@/components/Navbar';
import Clock from '@/components/Clock';
import DataTable from '@/components/DataTable';
import Header from '@/components/Header';
import CardGroup from '@/components/CardGroup';
import { Toaster } from '@/components/ui/toaster';

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <main className="ms-[280px] px-8 pt-8">
                <section className='p-4'>
                    <Header />
                </section>

                <section className='flex w-full p-4 justify-between gap-4 mt-4'>
                    <CardGroup />
                    <Clock />
                </section>

                <section className='p-4 mt-4'>
                    <DataTable />
                </section>
            </main>
        </>
    );
}
