const Card = () => {
  return (
    <div className='gap-10 flex flex-row pt-10'>
      <div className='bg-white shadow-md rounded-lg p-5 w-1/2'>
        <h2 className='text-xl font-bold'>Jumlah Karyawan</h2>
        <p className='text-2xl text-center pt-2'>1</p>
      </div>
      <div className='bg-white shadow-md rounded-lg p-5 w-1/2'>
        <h2 className='text-xl font-bold'>Jumlah Orderan</h2>
        <p className='text-2xl text-center pt-2'>2</p>
      </div>
      <div className='bg-white shadow-md rounded-lg p-5 w-1/2'>
        <h2 className='text-xl font-bold'>Riwayat Transaksi</h2>
        <p className='text-2xl text-center pt-2'>5</p>
      </div>
    </div>
  );
};

export default Card;
