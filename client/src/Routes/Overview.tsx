import React, { useState } from 'react';
import styled from 'styled-components';

import '@fontsource/chakra-petch';

import icon01 from '../images/navicon01.svg';
import icon02 from '../images/navicon02.svg';
import icon03 from '../images/navicon03.svg';
import icon04 from '../images/navicon04.svg';
import icon05 from '../images/navicon05.svg';
import package_icon from '../images/package.svg';

const Container = styled.div`
  overflow: hidden;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

export const Nav = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.07);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (min-width: 1000px) {
    align-items: flex-start;
    min-width: 300px;
    min-height: 100vh;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 1000px) {
    overflow: hidden;
    flex-direction: column;
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const MenuLink = styled.li`
display: flex;
padding: 0.5rem 1rem;
cursor: pointer;
text-align: center;
marging-left: 20px;
margin-bottom: 10px;
text-decoration: none;
list-style-type: none;
transition: all 0.2s ease-in;
font-size: 17px;
color: rgb(110, 110, 116);
align-items: center;



img {
    margin-right: 5px;
}

&:hover {
    color: rgb(223, 133, 43);

    img {
        filer: filter: invert(68%) sepia(12%) saturate(2357%) hue-rotate(343deg) brightness(102%) contrast(101%);
    }
}

a {
    text-decoration: none;
    color: rgb(110, 110, 116);

    &:hover {
        color: rgb(223, 133, 43);
    }
}

@media (max-width: 768px) {
    &:hover {
        background: none;
    }
}
`;

const MainSection = styled.div`
  padding: 15px;
  color: #fff;

  @media (min-width: 1000px) {
    width: 100%;
  }
`;

const ContentArea = styled.div`
  @media (min-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
  }
`;

const Heading = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  font-family: 'Chakra Petch', sans-serif;
`;

const Button = styled.button`
  min-height: 48px;
  padding: 10px 24px;
  border-radius: 90px;
  background: 0 0;
  border: 1px solid #df852b;
  color: #fff;
  font-size: 14px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  cursor: pointer;
`;

const PaymentBox = styled.div`
  background: rgba(255, 255, 255, 0.07);
  padding: 15px;
  border-radius: 8px;

  @media (min-width: 1000px) {
    height: 320px;
    margin-right: 20px;
  }
`;

const Header = styled.div`
  display: flex;

  h3 {
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
  }
`;

const Balance = styled.div`
  color: #ffa244;
  font-size: 56px;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 500;
  margin-bottom: 15px;
`;

const BalanceBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 12px;

  div {
  }

  p {
    color: rgb(96, 185, 103);
  }

  span {
  }

  @media (min-width: 1000px) {
  }
`;

const ReferralInfo = styled.div`
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.07);
  padding: 10px;
  border-radius: 8px;

  div {
    color: #fff;
  }

  @media (min-width: 1000px) {
    margin-top: 0;
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  span {
    font-size: 12px;
    font-weight: 600;
    color: rgb(96, 185, 103);
  }
`;

export default () => {
  return (
    <Container>
      <Nav>
        <Menu>
          <MenuLink>
            <Menu>
              <MenuLink>
                {' '}
                <img src={icon01} /> <a href="/overview">Overview</a>
              </MenuLink>
              <MenuLink>
                <img src={icon02} />{' '}
                <a href="/investment-packages">Buy a package</a>
              </MenuLink>
              <MenuLink>
                <img src={icon03} /> <a href="/payouts">Payouts</a>
              </MenuLink>
              <MenuLink>
                <img src={icon04} /> <a href="/order-histroy">Order History</a>
              </MenuLink>
              <MenuLink>
                <img src={icon05} />{' '}
                <a href="/referral-program">Referral Program</a>
              </MenuLink>
            </Menu>
          </MenuLink>
        </Menu>
      </Nav>
      <MainSection>
        <Heading>
          <h1>Overview</h1>
        </Heading>
        <ContentArea>
          <PaymentBox>
            <Heading>
              <Header>
                <img src={package_icon}></img>
                <h3>BALANCE</h3>
              </Header>
              <Button>Cash Out</Button>
            </Heading>
            <Balance>$ 0</Balance>
            <BalanceBox>
              <div>
                <p>TOTAL PROFIT</p>
                <span>$ 0.00</span>
              </div>
              <div>
                <p>BTC/USD</p>
                <span>$ 38,720.24</span>
              </div>
              <div>
                <p>PROFIT FOR MONTH</p>
                <span>$ 0.00</span>
              </div>
            </BalanceBox>
          </PaymentBox>
          <ReferralInfo>
            <Heading>
              <Header>
                <img src={package_icon}></img>
                <h3>REFERRALS INFO</h3>
              </Header>
            </Heading>
            <Body>
              <div>
                <Balance>$ 0.00</Balance>
                <span>PROFIT</span>
              </div>
              <div>
                <Balance>0</Balance>
                <span>REFERRALS</span>
              </div>
            </Body>
          </ReferralInfo>
        </ContentArea>
        <div></div>
      </MainSection>
    </Container>
  );
};
