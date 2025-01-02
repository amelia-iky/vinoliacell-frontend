import { FaCircleUser } from 'react-icons/fa6';
import { FaRegUser } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr';
import { IoCallOutline } from 'react-icons/io5';
import Navbar from '../elements/Navbar';
import {
  getFullName,
  getUserEmail,
  getUserAddress,
  getUserPhone,
} from '../utils/Auth';

const UserProfile = () => {
  const fullName = getFullName();
  const email = getUserEmail();
  const address = getUserAddress();
  const phone = getUserPhone();

  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className='flex justify-center bg-white mt-20 w-3/5 rounded-3xl p-10 gap-9 relative'>
          <div className='absolute bottom-96 inset-0 flex justify-center items-center'>
            <FaCircleUser className='bg-white rounded-full text-gray-500 text-8xl' />
          </div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-2xl font-medium pt-10'>Informasi Pribadi</h1>
            <div className='flex flex-row justify-between items-start pt-5 gap-40'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-gray-500'>Nama Lengkap</h1>
                <div className='flex flex-row gap-2 items-center border-b border-gray-300 pb-2'>
                  <FaRegUser />
                  <h1>{fullName}</h1>
                </div>
                <h1 className='text-gray-500'>Email</h1>
                <div className='flex flex-row gap-2 items-center border-b border-gray-300 pb-2'>
                  <HiOutlineMail />
                  <h1>{email}</h1>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <h1 className='text-gray-500'>Alamat</h1>
                <div className='flex flex-row gap-2 items-center border-b border-gray-300 pb-2'>
                  <GrLocation />
                  {address}
                </div>
                <h1 className='text-gray-500'>Nomor Telepon</h1>
                <div className='flex flex-row gap-2 items-center border-b border-gray-300 pb-2'>
                  <IoCallOutline />
                  <h1>
                    (<span className='text-xl'>+</span>62) {phone}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
