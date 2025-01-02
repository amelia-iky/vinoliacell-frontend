const OrderPage = () => {
  const orders = [
    {
      id: 1,
      image: 'samsung galaxy.jpg', // Ganti dengan URL gambar Galaxy S24 Ultra
      name: 'Brian',
      brand: 'Samsung',
      device: 'Galaxy S24 Ultra',
      issue: 'Daya Baterai',
      address: 'Sumatra',
    },
    {
      id: 2,
      image: 'ipad.jpg', // Ganti dengan URL gambar iPad Gen 9
      name: 'Putra',
      brand: 'Apple',
      device: 'iPad Gen 9',
      issue: 'Touch Screen',
      address: 'Sulawesi',
    },
  ];

  return (
    <div className='p-10 bg-blue-50'>
      <h1 className='text-3xl font-bold mb-8'>Orderan</h1>
      {orders.map((order) => (
        <div
          key={order.id}
          className='bg-white shadow-md rounded-lg p-5 mb-5 flex flex-col lg:flex-row items-center lg:items-start gap-5'
        >
          <div className='flex-shrink-0'>
            <img
              src={order.image}
              alt={order.device}
              className='rounded-lg border border-gray-200'
            />
          </div>
          <div className='flex-grow'>
            <h2 className='font-bold text-lg mb-2'>Nama: {order.name}</h2>
            <p>
              <span className='font-semibold'>Merek:</span> {order.brand}
            </p>
            <p>
              <span className='font-semibold'>Perangkat:</span> {order.device}
            </p>
            <p>
              <span className='font-semibold'>Masalah:</span> {order.issue}
            </p>
            <p>
              <span className='font-semibold'>Alamat:</span> {order.address}
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center'>
              <span className='font-bold'>Status:</span>
              <button className='bg-yellow-400 text-white font-semibold px-4 py-2 ml-2 rounded-lg'>
                Proses
              </button>
              <button className='bg-green-400 text-white font-semibold px-4 py-2 ml-2 rounded-lg'>
                Selesai
              </button>
            </div>
            <div>
              <p className='font-bold mb-2'>Catatan:</p>
              <textarea
                className='border rounded-lg w-full p-3 bg-blue-100'
                placeholder='Tulis catatan disini'
              ></textarea>
              <button className='mt-3 bg-blue-900 text-white px-4 py-2 rounded-lg'>
                Kirim
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
