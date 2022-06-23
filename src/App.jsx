import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayouts from './layouts/AuthLayouts';
import Login from './pages/user/Login';
import ForgetPassword from './pages/user/ForgetPassword';
import ResetPassword from './pages/user/ResetPassword';
import HomeLayouts from './layouts/HomeLayouts';

//Primer Route= Area Publica
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayouts />}>
          <Route index element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
        <Route path="/dashboard" element={<HomeLayouts />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
