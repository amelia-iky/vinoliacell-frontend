import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDasboard';
import AdminOrder from './pages/AdminOrder';
import UserDashboard from './pages/UserDashboard';
import UserProfile from './pages/UserProfile';
import UserService from './pages/UserService';
import UserHistory from './pages/UserHistory';
import ProtectedRoute from './components/ProtectedRoute';

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

        {/* Admin Dashboard */}
        <Route
          path='/admin'
          element={
            <ProtectedRoute element={<AdminDashboard />} requiredRole='admin' />
          }
        />
        <Route
          path='/admin/order'
          element={
            <ProtectedRoute element={<AdminOrder />} requiredRole='admin' />
          }
        />

        {/* User Dashboard */}
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute element={<UserDashboard />} requiredRole='user' />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute element={<UserProfile />} requiredRole='user' />
          }
        />
        <Route
          path='/layanan-perbaikan'
          element={
            <ProtectedRoute element={<UserService />} requiredRole='user' />
          }
        />
        <Route
          path='/riwayat'
          element={
            <ProtectedRoute element={<UserHistory />} requiredRole='user' />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
