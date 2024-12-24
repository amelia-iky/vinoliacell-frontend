import { useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className='flex flex-col bg-white shadow-lg'>
      {/* Header */}
      <div className='flex flex-row justify-between items-center border-b-2 border-slate-500 py-5'>
        <div className='flex flex-row gap-4 px-20'>
          <h1 className='text-3xl font-bold'>Vinolia Cell</h1>
          <img className='w-28' src='/icons/logo.png' alt='logo' />
        </div>

        {/* Dropdown */}
        <div className='relative px-20'>
          <FaRegCircleUser
            className='text-5xl cursor-pointer'
            onClick={toggleMenu}
          />

          {/* Dropdown Menu */}
          {showMenu && (
            <div className='absolute right-3 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg'>
              <ul className='flex flex-col'>
                <li className='px-4 py-2 hover:bg-primary'>
                  <a href='/signin'>Login</a>
                </li>
                <li className='px-4 py-2 hover:bg-primary'>
                  <a href='/signup'>Register</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className='flex flex-row justify-center items-center gap-10 h-14 py-2 border-b-2 border-slate-500'>
        <a
          className='hover:border-2 hover:rounded-md hover:bg-slate-50 p-2'
          href='/'
        >
          Halaman Saya
        </a>
        <a
          className='hover:border-2 hover:rounded-md hover:bg-slate-50 p-2'
          href='#'
        >
          Layanan Perbaikan
        </a>
        <a
          className='hover:border-2 hover:rounded-md hover:bg-slate-50 p-2'
          href='#'
        >
          Riwayat
        </a>
        <a
          className='hover:border-2 hover:rounded-md hover:bg-slate-50 p-2'
          href='#'
        >
          Tentang Kami
        </a>
      </div>
    </div>
  );
};

export default Navbar;
