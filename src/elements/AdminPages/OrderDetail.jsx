import { useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { usePutOrder } from '../../hooks/usePutOrder';
import OrderData from '../../components/OrderData';

// Status options
const data = [
  { id: 1, name: 'Proses Perbaikan' },
  { id: 2, name: 'Perbaikan Selesai' },
  { id: 3, name: 'Pesanan Ditolak' },
];

const OrderDetail = ({ orderId, closePopup }) => {
  const [status, setStatus] = useState('');
  const [information, setInformation] = useState('');
  const { putOrder } = usePutOrder(orderId);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!status || !information) {
      Swal.fire({
        icon: 'warning',
        title: 'Gagal',
        text: 'Silahkah lengkapi form!',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    await putOrder(status, information);

    closePopup();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='flex gap-20 bg-white p-8 rounded-lg shadow-lg'>
        <div className='py-5'>
          <h1 className='text-2xl font-bold mb-4 '>Detail Pesanan</h1>
          <OrderData orderId={orderId} />
        </div>

        <div className='border-2 p-5 rounded-lg'>
          <h1 className='text-2xl font-bold mb-4 '>Ubah Status</h1>
          <Form className='text-gray-700' onSubmit={handleSubmit}>
            <p>Status</p>
            <select
              className='border-b-2 outline-none p-2'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value='' disabled>
                Pesanan Diterima
              </option>
              {data.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>

            <p>Keterangan</p>
            <input
              type='text'
              value={information}
              onChange={(e) => setInformation(e.target.value)}
              placeholder='Detail Informasi'
              className='border-b-2 outline-none p-2'
            />
          </Form>

          <div className='flex flex-row justify-center items-center gap-5 pt-2'>
            <Button type='button' onClick={closePopup} variant={'deleted'}>
              Batal
            </Button>

            <Button type='submit' onClick={handleSubmit} variant={'primary'}>
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderDetail.propTypes = {
  orderId: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default OrderDetail;
