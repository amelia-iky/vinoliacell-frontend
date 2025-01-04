import { SlBasket } from 'react-icons/sl';
import { SlBasketLoaded } from 'react-icons/sl';
import { GrGroup } from 'react-icons/gr';
import { useFetchOrder } from '../../hooks/useFetchOrder';
import { useFetchUserData } from '../../hooks/useFetchUserData';

const Card = () => {
  const { data } = useFetchOrder();
  const { userData } = useFetchUserData();

  const countByStatus = (status) =>
    data ? data.filter((item) => item.status === status).length : 0;

  return (
    <div className='flex flex-row gap-10'>
      <div className='flex flex-col bg-white justify-center shadow-md rounded-lg px-5 py-3 w-1/2 gap-3'>
        <h2 className='text-xl font-bold'>Jumlah Pelanggan</h2>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-2xl'>{userData ? userData?.length : 0}</p>
          <GrGroup className='text-4xl' />
        </div>
      </div>

      <div className='flex flex-col bg-white justify-center shadow-md rounded-lg px-5 py-3 w-1/2 gap-3'>
        <h2 className='text-xl font-bold'>Jumlah Pesanan Aktif</h2>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-2xl'>
            {countByStatus('Pesanan Diterima') +
              countByStatus('Proses Perbaikan')}
          </p>
          <SlBasketLoaded className='text-4xl' />
        </div>
      </div>

      <div className='flex flex-col bg-white justify-center shadow-md rounded-lg px-5 py-3 w-1/2 gap-3'>
        <h2 className='text-xl font-bold'>Jumlah Pesanan Selesai</h2>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-2xl'>{countByStatus('Perbaikan Selesai')}</p>
          <SlBasket className='text-4xl' />
        </div>
      </div>
    </div>
  );
};

export default Card;
