import Loading from '../../components/Loading';
import { useFetchOrder } from '../../hooks/useFetchOrder';

const HistoryCard = () => {
  const { data, loading } = useFetchOrder();

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
    <>
      {data.map((data) => (
        <div
          key={data.id}
          className='flex flex-row justify-beetween items-center bg-white gap-5 mx-96 rounded-xl border-2 border-gray-300 py-3 my-7'
        >
          {/* Image */}
          <img
            className='ml-5'
            src='/assets/samsung galaxy.jpg'
            alt='product'
          />

          {/* Table */}
          <table>
            <tbody>
              <tr>
                <td className='font-semibold'>Merek</td>
                <td className='px-2'>:</td>
                <td>{data.brand}</td>
              </tr>
              <tr>
                <td className='font-semibold pt-1'>Model</td>
                <td className='px-2'>:</td>
                <td>{data.model}</td>
              </tr>
              <tr>
                <td className='font-semibold py-1'>Masalah</td>
                <td className='px-2'>:</td>
                <td>{data.issue}</td>
              </tr>
              <tr>
                <td className='font-semibold'>ID Tiket</td>
                <td className='px-2'>:</td>
                <td>{data.id}</td>
              </tr>
              <tr>
                <td className='font-semibold py-1'>Keterangan</td>
                <td className='px-2'>:</td>
                <td>{data.information || '-'}</td>
              </tr>
              <tr>
                <td className='font-semibold pt-1'>Status</td>
                <td className='px-2'>:</td>
                <td
                  className={`py-1 px-3 text-white rounded-full text-center ${
                    data.status === 'Pesanan Diterima'
                      ? 'bg-blue-500'
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
      ))}
    </>
  );
};

export default HistoryCard;
