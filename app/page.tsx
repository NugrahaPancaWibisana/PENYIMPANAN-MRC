import mrc from '../public/mrc.png'
import ilustrasi from '../public/ilustrasi.png'
import Image from 'next/image'
import { handleLogin } from '@/lib/actions';

export default function Home() {
  return (
    <form action={handleLogin} className='text-[#383838] '>
      <label className='w-full h-screen bg-slate-100 flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-0' htmlFor="RFID">
        <section className="bg-[#383838] rounded-l-2xl flex-col justify-between items-center p-10 w-[40%] xl:w-[35%] h-[80%] hidden lg:flex">
          <div className='w-full'>
            <Image className='w-[80px]' src={mrc} alt='Logo' />
          </div>
          <div className='w-full flex justify-center items-center'>
            <Image className='w-[70%]' priority={true} src={ilustrasi} alt='Logo' />
          </div>
          <div className='w-full flex flex-col gap-2'>
            <p className='text-white'>
              Untuk melanjutkan dan mengakses semua fitur, silakan login terlebih dahulu. Jika mengalami masalah saat login, silakan hubungi admin.
            </p>
            <p className='text-white text-sm'>
              © PKL MRC 2024
            </p>
          </div>
        </section>

        <section className='border-2 rounded-lg lg:border-y-2 bg-white lg:border-r-2 lg:border-l-0 lg:rounded-l-none lg:rounded-r-2xl flex flex-col justify-evenly items-center p-10 w-[90%] h-[80%] lg:w-[40%] lg:h-[80%] xl:w-[35%]'>
          <div className='w-full'>
            <p className='text-3xl text-center text-[#383838]'>Login</p>
          </div>
          <div className='border-[10px] border-[#383838] w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-2xl flex justify-center items-center relative'>
            <div className='absolute md:top-[-50px]'></div>
            <div className='bg-white w-[290px] h-[140px] md:w-[360px] md:h-[200px] absolute'></div>
            <div className='bg-white w-[140px] h-[290px] md:w-[200px] md:h-[360px] absolute'></div>
            <p className='absolute text-center md:w-[400px] md:text-lg font-bold'>SILAHKAN SCAN ID CARDMU DI RFID SCANNER</p>
          </div>
        </section>
        <div className='w-[90%] lg:hidden'>
          <p className='text-[#383838] text-sm'>
            © PKL MRC 2024
          </p>
        </div>
      </label>

      <input className="outline-none text-transparent w-[1px] h-[1px] border-none ring-0 focus:ring-0 focus:outline-none focus:border-none selection:bg-transparent absolute left-0 bottom-0 translate-x-[-2000px]"
        type="text" id='RFID' name='RFID' autoFocus required />
    </form>
  );
}
