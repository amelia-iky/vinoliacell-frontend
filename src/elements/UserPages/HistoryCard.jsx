import Button from '../../components/Button';

const HistoryCard = () => {
  return (
    <div className='flex flex-row justify-center items-center bg-white gap-40 mx-60 rounded-xl border-2 border-gray-300 py-2 mt-7'>
      <div className='flex items-center gap-5'>
        <div>
          <img src='/assets/samsung galaxy.jpg' alt='' />
        </div>
        <div className=''>
          <table>
            <tr>
              <td>Merek</td>
              <td className='px-2'>:</td>
              <td>Samsung</td>
            </tr>
            <tr>
              <td>Model</td>
              <td className='px-2'>:</td>
              <td>Galaxy</td>
            </tr>
            <tr>
              <td>Masalah</td>
              <td className='px-2'>:</td>
              <td>Matot</td>
            </tr>
            <tr>
              <td>ID Tiket</td>
              <td className='px-2'>:</td>
              <td>123</td>
            </tr>
            <tr>
              <td>Status</td>
              <td className='px-2'>:</td>
              <td>Selesai</td>
            </tr>
          </table>
        </div>
      </div>

      <div className='flex justify-center w-1/3'>
        <Button
          type='submit'
          variant={'primary'}
          //   onClick={handleSubmit}
          //   className='w-56'
        >
          Cek Kondisi
        </Button>
      </div>
    </div>
  );
};

export default HistoryCard;
