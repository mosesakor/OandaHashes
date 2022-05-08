import './App.css';
import styled from "styled-components";
import Navbar from "./Components/Navbar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home.jsx"
import InvestmentPackages from "./Routes/InvestmentPackages.jsx"
import Equipment from "./Routes/Equiment.jsx"
import ReferralProgram from "./Routes/ReferralProgram.jsx"
import Faq from "./Routes/Faq.jsx"
import OrderPayment from "./Routes/OrderPayment.jsx"
import Overview from "./Routes/Overview.jsx"
import Payouts from "./Routes/Payouts.jsx"


import Carousel from "./Components/Carousel.jsx"
import PackageData from './Components/PackageData';
import Package from './Components/Package';

import icon01 from "./images/icon01.svg"
import icon02 from "./images/icon02.svg"
import icon03 from "./images/icon03.svg"
import icon04 from "./images/icon04.svg"

import background from "./images/atom_background.svg";
import background2 from "./images/bg-form.svg"



import about_image from "./images/about_image.svg"

import Footer from "./Components/Footer"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investment-packages" element={<InvestmentPackages />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="referral-program" element={<ReferralProgram />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/order-payment" element={<OrderPayment />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/payouts" element={<Payouts />} />      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
