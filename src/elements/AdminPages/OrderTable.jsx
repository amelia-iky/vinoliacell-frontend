import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Loading from '../../components/Loading';
import { useFetchOrder } from '../../hooks/useFetchOrder';
import Button from '../../components/Button';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';

const OrderTable = () => {
  const { data, loading } = useFetchOrder();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='mt-10 '>
      <table className='bg-white shadow-md w-full text-center rounded-xl'>
        <thead className='bg-birucustom text-white'>
          <tr className='h-16 border-b'>
            <th className='px-5'>No.</th>
            <th className='px-5'>ID Tiket</th>
            <th className='px-5'>Tanggal Pemesanan</th>
            <th className='px-5'>Nama Pemesan</th>
            <th className='px-5'>Tipe HP</th>
            <th className='px-5'>Kerusakan</th>
            <th className='px-5'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={data.id} className='h-12 border-b'>
              <td>{index + 1}</td>
              <td>{data.id}</td>
              <td>
                {format(new Date(data.user.created_at), 'dd MMMM yyyy', {
                  locale: id,
                })}
              </td>
              <td>{data.user.fullName}</td>
              <td>{data.brand}</td>
              <td>{data.issue}</td>
              <td className='flex p-2 gap-2 justify-center items-center'>
                <Button variant={'primary'} icon={FaRegEdit}></Button>
                <Button variant={'deleted'} icon={MdOutlineDelete}></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
