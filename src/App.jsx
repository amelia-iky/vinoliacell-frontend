import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
