import PropTypes from 'prop-types';
import { useFetchOrderById } from '../hooks/useFetchOrderById';
import Loading from './Loading';

const OrderData = ({ orderId }) => {
  const { data, loading } = useFetchOrderById(orderId);

  if (loading) {
    return <Loading />;
  }

  if (!data || data.length === 0) {
    return (
      <div className='flex justify-center items-center bg-white gap-40 mx-96 rounded-xl border-2 border-gray-300 py-2 mt-7'>
        <h1>Tidak ada riwayat</h1>
      </div>
    );
  }

  return (
    <div className='flex items-center gap-5'>
      <img src='/assets/samsung galaxy.jpg' alt='' />

      <table>
        <tbody key={data.id}>
          <tr>
            <td>Merek</td>
            <td className='px-2'>:</td>
            <td>{data.brand}</td>
          </tr>
          <tr>
            <td className='pt-1'>Model</td>
            <td className='px-2'>:</td>
            <td>{data.model}</td>
          </tr>
          <tr>
            <td className='py-1'>Masalah</td>
            <td className='px-2'>:</td>
            <td>{data.issue}</td>
          </tr>
          <tr>
            <td>ID Tiket</td>
            <td className='px-2'>:</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <td className='pt-1'>Status</td>
            <td className='px-2'>:</td>
            <td
              className={`py-2 px-3 text-white rounded-lg text-center ${
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

OrderData.propTypes = {
  orderId: PropTypes.string.isRequired,
};

export default OrderData;
