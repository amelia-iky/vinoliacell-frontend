import { Link } from 'react-router-dom';

const UnauthorizedPages = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center bg-white p-10 rounded-xl shadow-lg w-1/3'>
        <h1 className='text-3xl font-bold text-red-600'>403 - Unauthorized</h1>
        <p className='mt-4 text-lg text-gray-600'>
          Anda tidak memiliki izin untuk mengakses halaman ini.
        </p>
        <div className='mt-6'>
          <Link
            to='/'
            className='text-blue-500 hover:text-blue-700 font-semibold'
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPages;
