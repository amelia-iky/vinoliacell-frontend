import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { IoHammerOutline } from 'react-icons/io5';
import { IoIosTimer } from 'react-icons/io';
import { getUserName } from '../../utils/Auth';

const Card = () => {
  const navigate = useNavigate();
  const name = getUserName();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-start bg-white mt-20 w-3/5 rounded-3xl p-10 gap-9'>
        <div
          className='flex flex-row justify-start items-center gap-2 cursor-pointer'
          onClick={handleProfileClick}
        >
          <FaCircleUser className='text-6xl text-gray-500' />
          <h1 className='text-xl font-medium'>{name}</h1>
        </div>
        <div className='flex flex-row justify-center gap-4'>
          <div className='flex flex-row bg-abutipis rounded-3xl w-96 h-full p-5 gap-5'>
            <IoHammerOutline className='text-9xl -rotate-45 scale-150' />
            <div className='flex flex-col items-start gap-4'>
              <p className=''>
                Dapatkan handphone yang berfungsi optimal kembali. Dengan
                kunjungin halaman layanan kami.
              </p>
              <a
                className='underline underline-offset-4'
                href='/layanan-perbaikan'
              >
                Layanan Perbaikan
              </a>
            </div>
          </div>
          <div className='flex flex-row bg-pink w-96 h-full rounded-3xl p-5 gap-5 items-center'>
            <IoIosTimer className='text-9xl rotate-45' />
            <div className='flex flex-col items-start gap-4'>
              <p>Ingin tahu riwayat perbaikan handphone Anda? Cek sekarang!</p>
              <a className='underline underline-offset-4' href='/riwayat'>
                Riwayat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
