import { useState } from 'react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import OrderDetail from './OrderDetail';
import { useFetchOrder } from '../../hooks/useFetchOrder';
import { useDeleteOrder } from '../../hooks/useDeleteOrder';

const OrderTable = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const { data, loading } = useFetchOrder();
  const { deleteOrder } = useDeleteOrder();

  if (loading) {
    return <Loading />;
  }

  // Handle for edit
  const handleEditClick = (id) => {
    setSelectedOrderId(id);
    setPopupVisible(true);
  };

  // Handle for delete
  const handleDeleteClick = (id) => {
    console.log('ID yang diteruskan ke deleteOrder:', id);
    deleteOrder(id);
  };

  // Handle for close popup
  const handlePopupClose = () => {
    setPopupVisible(false);
    setSelectedOrderId(null);
  };

  return (
    <div className='my-10 '>
      <table className='bg-white shadow-md w-full text-center rounded-xl'>
        <thead className='bg-birucustom text-white'>
          <tr className='h-16 border-b'>
            <th className='px-5'>No.</th>
            <th className='px-5'>ID Tiket</th>
            <th className='px-5'>Tanggal Pemesanan</th>
            <th className='px-5'>Nama Pemesan</th>
            <th className='px-5'>Kerusakan</th>
            <th className='px-5'>Status</th>
            <th className='px-5'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={data.id} className='border-b'>
              <td>{index + 1}</td>
              <td>{data.id}</td>
              <td>
                {format(new Date(data.user.created_at), 'dd MMMM yyyy', {
                  locale: id,
                })}
              </td>
              <td>{data.user.fullName}</td>
              <td>{data.issue}</td>
              <td
                className={`my-10 text-white rounded-lg text-center px-2 ${
                  data.status === 'Pesanan Diterima'
                    ? 'bg-pink'
                    : data.status === 'Proses Perbaikan'
                    ? 'bg-yellow-500'
                    : data.status === 'Perbaikan Selesai'
                    ? 'bg-green-500'
                    : data.status === 'Pesanan Ditolak'
                    ? 'bg-red-500'
                    : 'bg-white'
                }`}
              >
                {data.status}
              </td>
              <td className='flex p-2 gap-2 justify-center items-center'>
                <Button
                  variant={'deleted'}
                  onClick={() => handleDeleteClick(data.id)}
                  icon={MdOutlineDelete}
                ></Button>
                <Button
                  variant={'primary'}
                  onClick={() => handleEditClick(data.id)}
                  icon={FaRegEdit}
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup */}
      {popupVisible && (
        <OrderDetail orderId={selectedOrderId} closePopup={handlePopupClose} />
      )}
    </div>
  );
};

export default OrderTable;
