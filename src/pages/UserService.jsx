import Navbar from '../elements/Navbar';
import FormService from '../elements/UserPages/FormService';

const UserService = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-3xl font-medium pt-10'>
          Pilih Jenis Perangkat Anda
        </h1>
        <FormService />
      </div>
    </>
  );
};

export default UserService;
