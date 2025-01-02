import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { getUserName } from '../utils/Auth';
import Swal from 'sweetalert2';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('Guest');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Set login status
  useEffect(() => {
    const status = sessionStorage.getItem('token');
    setIsLogin(!!status);

    const userName = getUserName();
    setName(userName);
  }, [isLogin]);

  // Toggle menu visibility
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsLogin(false);
    setShowMenu(false);

    // Alert
    Swal.fire({
      icon: 'success',
      title: 'Logout berhasil',
      text: 'Anda telah berhasil keluar!',
      showConfirmButton: false,
      timer: 2000,
    });

    // Redirect to signin
    navigate('/signin');
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
        <div ref={dropdownRef}>
          {isLogin ? (
            <div
              className='flex flex-row items-center gap-4 cursor-pointer'
              onClick={toggleMenu}
            >
              <h1 className='text-xl font-medium'>Hi! {name}</h1>
              <div className='relative pr-20'>
                <FaCircleUser className='text-5xl text-gray-500' />
                {/* Dropdown Menu */}
                {showMenu && (
                  <div className='absolute right-10 mt-2 w-32 shadow-lg'>
                    <ul className='flex flex-col'>
                      <li className='flex justify-center bg-white hover:bg-primary border border-gray-300 rounded-md py-2'>
                        <a href='/dashboard'>Dashboard</a>
                      </li>
                      <li
                        className='flex justify-center bg-red-500 hover:bg-red-600 border border-gray-300 rounded-md text-white py-2 cursor-pointer'
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className='relative px-20'>
              <FaCircleUser
                className='text-5xl text-gray-500 cursor-pointer'
                onClick={toggleMenu}
              />
              {/* Dropdown Menu */}
              {showMenu && (
                <div className='absolute right-10 mt-2 w-32 shadow-lg bg-white'>
                  <ul className='flex flex-col'>
                    <div className='bg-white border border-gray-300 rounded-md'>
                      <li className='flex justify-center hover:bg-primary py-2 border-b border-gray-300'>
                        <a href='/signin'>Login</a>
                      </li>
                      <li className='flex justify-center hover:bg-primary py-2'>
                        <a href='/signup'>Register</a>
                      </li>
                    </div>
                  </ul>
                </div>
              )}
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
          href='/layanan-perbaikan'
        >
          Layanan Perbaikan
        </a>
        <a
          className='hover:border-2 hover:rounded-md hover:bg-slate-50 p-2'
          href='/riwayat'
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
