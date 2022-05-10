import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Routes/Home';
import About from './Routes/About';
import InvestmentPackages from './Routes/InvestmentPackages';
import Equipment from './Routes/Equipment';
import ReferralProgram from './Routes/ReferralProgram';
import Faq from './Routes/Faq';
import OrderPayment from './Routes/OrderPayment';
import Overview from './Routes/Overview';
import Payouts from './Routes/Payouts';
import Registration from './Routes/Registration';
import Login from './Routes/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/investment-packages" element={<InvestmentPackages />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/referral-program" element={<ReferralProgram />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/order-payment" element={<OrderPayment />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/payouts" element={<Payouts />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
