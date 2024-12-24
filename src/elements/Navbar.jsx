import { FaRegCircleUser } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className='flex flex-col bg-white'>
      <div className='flex flex-row justify-between items-center border-b-2 border-slate-500 py-5'>
        <div className='flex flex-row gap-4 px-20'>
          <h1 className='text-3xl font-bold'>Vinolia Cell</h1>
          <img className='w-28' src='/icons/logo.png' alt='logo' />
        </div>
        <div className='px-20'>
          <FaRegCircleUser className='text-5xl' />
        </div>
      </div>

      <div className='flex flex-row justify-center items-center gap-10 h-14 py-2 border-b-2 border-slate-500'>
        <a
          className='hover:border hover:boder-2 hover:rounded-md hover:bg-slate-50 p-2'
          href='#'
        >
          Halaman Saya
        </a>
        <a
          className='hover:border hover:boder-2 hover:rounded-md hover:bg-slate-50 p-2'
          href='#'
        >
          Layanan Perbaikan
        </a>
        <a
          className='hover:border hover:boder-2 hover:rounded-md hover:bg-slate-50 p-2'
          href='#'
        >
          Riwayat
        </a>
        <a
          className='hover:border hover:boder-2 hover:rounded-md hover:bg-slate-50 p-2'
          href='#'
        >
          Tentang Kami
        </a>
      </div>
    </div>
  );
};

export default Navbar;
