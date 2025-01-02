import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDasboard';
import OrderPage from './pages/Orderan';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path='/' element={<LandingPages />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />

        {/* Aadmin Dashboard */}
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/order' element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
