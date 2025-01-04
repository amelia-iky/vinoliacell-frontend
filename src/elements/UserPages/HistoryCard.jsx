import Button from '../../components/Button';
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
          className='flex flex-row justify-center items-center bg-white gap-28 mx-60 rounded-xl border-2 border-gray-300 py-2 my-7'
        >
          <div className='flex items-center gap-5'>
            {/* Image */}
            <img src='/assets/samsung galaxy.jpg' alt='' />

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
                  <td className='font-semibold pt-1'>Status</td>
                  <td className='px-2'>:</td>
                  <td
                    className={`p-1 text-white rounded-lg text-center ${
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
          <div className='flex justify-center w-1/3'>
            <Button
              type='submit'
              variant={'primary'}
              //   onClick={handleSubmit}
            >
              Cek Kondisi
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default HistoryCard;
