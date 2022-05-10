import React from 'react';
import styled from 'styled-components';

import Navbar from '../Components/Navbar';
import PackageData from '../Components/PackageData';
import Package from '../Components/Package';
import Footer from '../Components/Footer';

import background from '../images/bg3.svg';

const Container = styled.div`
  color: #fff;
  overflow: hidden;
`;

const MainSection = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 15px 30px;
  background-attachment: fixed;
  min-height: 420px;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 900;
  }

  p {
    font-size: 16px;
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    text-align: ;
  }
`;

const PackageSection = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  margin: 40px 0;

  @media (min-width: 648px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  c @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const LastSection = styled.div`
  border-top: 2px solid rgba(255, 255, 255, 0.07);
  background-color: rgba(255, 255, 255, 0.07);
  padding: 30px 30px;
  margin-top: 8++0px;
`;

const InvestmentPackages = () => {
  return (
    <Container>
      <MainSection>
        <Navbar />
        <h1>Investment Packages</h1>
        <p>
          Choose any valid package that meets all your requirements. Each
          package has its own advantage.
        </p>
      </MainSection>
      <PackageSection>
        {PackageData.map(
          ({ type, img, level, duration, profit, hashes, price, btc }) => (
            <Package
              type={type}
              img={img}
              level={level}
              duration={duration}
              profit={profit}
              hashes={hashes}
              price={price}
              btc={btc}
            />
          ),
        )}
      </PackageSection>
      <LastSection>
        <Footer />
      </LastSection>
    </Container>
  );
};

export default InvestmentPackages;
