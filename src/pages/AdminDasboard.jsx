import Navbar from '../elements/Navbar';
import Card from '../elements/AdminPages/Card';
import OrderTable from '../elements/AdminPages/OrderTable';
import { getUserName } from '../utils/Auth';

const AdminDashboard = () => {
  const userName = getUserName();

  return (
    <>
      <Navbar />
      <div className='mx-32'>
        <div className='flex flex-col gap-4 py-10 text-2xl font-semibold'>
          <h1>
            Selamat Datang <span className='font-bold'>{userName}</span>
          </h1>
          <h1>DASHBOARD</h1>
        </div>
        <Card />
        <OrderTable />
      </div>
    </>
  );
};

export default AdminDashboard;
