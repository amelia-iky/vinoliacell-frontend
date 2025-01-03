import Navbar from '../elements/Navbar';
import TitlePages from '../elements/AdminPages/TitlePages';
import Card from '../elements/AdminPages/Card';
import OrderTable from '../elements/AdminPages/OrderTable';

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div className='mx-32'>
        <TitlePages />
        <Card />
        <OrderTable />
      </div>
    </>
  );
};

export default AdminDashboard;
