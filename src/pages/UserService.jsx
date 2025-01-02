import Navbar from '../elements/Navbar';
import TitlePages from '../components/TitlePages';
import FormService from '../elements/UserPages/FormService';

const UserService = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center gap-5'>
        <TitlePages>Pilih Jenis Perangkat Anda</TitlePages>
        <FormService />
      </div>
    </>
  );
};

export default UserService;
