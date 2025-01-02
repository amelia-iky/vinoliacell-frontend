import Navbar from '../elements/Navbar';


const AdminDashboard = () => {
    return (
        <div className='px-10 bg-blue-50 min-h-screen'>
            <Navbar />
            <div className='text-2xl font-semibold'>
                <h1 className='pt-10'>Selamat Datang <span className='font-bold'>Admin</span></h1>
                <h1 className='text-3xl pt-5 font-bold'>DASHBOARD</h1>
            </div>

            {/* Cards Summary */}
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

            {/* Order Table */}
            <div className='pt-10'>
                <table className='w-full bg-white shadow-md rounded-lg'>
                    <thead className='bg-blue-600 text-white'>
                        <tr>
                            <th className='py-3 px-4'>NO</th>
                            <th className='py-3 px-4'>ID ORDER</th>
                            <th className='py-3 px-4'>TANGGAL ORDER</th>
                            <th className='py-3 px-4'>NAMA PELANGGAN</th>
                            <th className='py-3 px-4'>JENIS ORDERAN</th>
                            <th className='py-3 px-4'>KERUSAKAN</th>
                            <th className='py-3 px-4'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='Pelanggan 1'>
                            <td className='py-3 px-4'>1</td>
                            <td className='py-3 px-4'>ID2F9135</td>
                            <td className='py-3 px-4'>20-01-2025</td>
                            <td className='py-3 px-4'>Putra</td>
                            <td className='py-3 px-4'>Service HP</td>
                            <td className='py-3 px-4'>Tidak bisa dicharger</td>
                            <td className='py-3 px-4 flex gap-2 justify-center'>
                                <button className='bg-blue-500 text-white px-3 py-1 rounded'>Terima</button>
                                <button className='bg-red-500 text-white px-3 py-1 rounded'>Hapus</button>
                            </td>
                        </tr>
                        <tr className='Pelanggan 2'>
                            <td className='py-3 px-4'>2</td>
                            <td className='py-3 px-4'>ID2H471</td>
                            <td className='py-3 px-4'>25-01-2025</td>
                            <td className='py-3 px-4'>Amelia</td>
                            <td className='py-3 px-4'>Service HP</td>
                            <td className='py-3 px-4'>Tidak bisa dinyalain</td>
                            <td className='py-3 px-4 flex gap-2 justify-center'>
                                <button className='bg-blue-500 text-white px-3 py-1 rounded'>Terima</button>
                                <button className='bg-red-500 text-white px-3 py-1 rounded'>Hapus</button>
                            </td>
                        </tr>
                        <tr className='Pelanggan 3'>
                            <td className='py-3 px-4'>3</td>
                            <td className='py-3 px-4'>ID21421</td>
                            <td className='py-3 px-4'>30-01-2025</td>
                            <td className='py-3 px-4'>Brian</td>
                            <td className='py-3 px-4'>Service HP</td>
                            <td className='py-3 px-4'>Kamera Rusak</td>
                            <td className='py-3 px-4 flex gap-2 justify-center'>
                                <button className='bg-blue-500 text-white px-3 py-1 rounded'>Terima</button>
                                <button className='bg-red-500 text-white px-3 py-1 rounded'>Hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
