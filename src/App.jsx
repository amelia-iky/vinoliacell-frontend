import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDasboard';
import OrderPage from './pages/Orderan';
import UserDashboard from './pages/UserDashboard';
import UserProfile from './pages/UserProfile';
import UserService from './pages/UserService';


const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        {/* Landing Pages */}
        <Route path='/' element={<LandingPages />} />

        {/* Authentication */}
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />


        {/* Aadmin Dashboard */}
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/order' element={<OrderPage />} />

        {/* User Dashboard */}
        <Route path='/dashboard' element={<UserDashboard />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/layanan-perbaikan' element={<UserService />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
