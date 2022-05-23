import React from 'react';
import styled from 'styled-components';

import '@fontsource/chakra-petch';

import icon01 from '../images/navicon01.svg';
import icon02 from '../images/navicon02.svg';
import icon03 from '../images/navicon03.svg';
import icon04 from '../images/navicon04.svg';
import icon05 from '../images/navicon05.svg';
import package_icon from '../images/package.svg';
import Cookies from 'universal-cookie';
import Button from '../Components/Button';

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Nav = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  flex-direction: row;

  @media (min-width: 1000px) {
    padding-right: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Menu = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;

  @media (min-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    transition: max-height 0.3s ease-in;
    width: 100%;
  }

  a {
    color: var(--text);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--heading);
    }
  }
`;

const MenuLink = styled.li`
  display: flex;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  transition: color 0.15s ease, filter 0.15s ease;
  font-size: 1rem;
  color: rgb(110, 110, 116);
  align-items: center;
  gap: 0.5rem;

  &.active {
    color: var(--link-active);

    img {
      filter: invert(52%) sepia(36%) saturate(4362%) hue-rotate(169deg)
        brightness(104%) contrast(107%);
    }
  }

  &:hover {
    color: var(--heading);

    img {
      filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(235deg)
        brightness(103%) contrast(101%);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    white-space: nowrap;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 8px 0 0 8px;
  border: 1px solid var(--border);
  padding: 1rem;
  background-color: var(--background-secondary);
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Heading = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

const PaymentBox = styled.div`
  background: var(--background-tertiary);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);

  @media (min-width: 1000px) {
    height: 320px;
    margin-right: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--heading);
  }
`;

const Balance = styled.div`
  color: var(--link-active);
  font-size: 56px;
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
  background: var(--background-tertiary);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);

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

type User = {
  id: string;
  username: string;
  email: string;
  balance: number;
  profit: { daily: number; total: number };
};

type State = {
  info: User;
};

export default class Overview extends React.PureComponent<{}, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    const data = JSON.parse(
      atob((new Cookies().get('token') as string).split('.')[1]),
    );

    this.state = {
      info: {
        id: data.id,
        username: '',
        email: '',
        balance: 0,
        profit: { daily: 0, total: 0 },
      },
    };
  }
  async componentDidMount() {
    const token = new Cookies().get('token');

    const resp = await fetch(
      `http://localhost:8080/users/${this.state.info.id}`,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    const data: {
      type: number;
      name?: string;
      message?: string;
      user?: User;
    } = await resp.json();

    if (data.type === 0) {
      const user = data.user!;
      this.setState({ info: user });
    } else {
      alert(`Error, ${data.type}, ${data.name}, ${data.message}`);
    }
  }

  render() {
    return (
      <Container>
        <Nav>
          <Menu>
            <Menu>
              <a href="/">← Back</a>
              <MenuLink className="active">
                <img src={icon01} alt="" />
                <a href="/overview">Overview</a>
              </MenuLink>
              <MenuLink>
                <img src={icon02} alt="" />
                <a href="/investment-packages">Buy a package</a>
              </MenuLink>
              <MenuLink>
                <img src={icon03} alt="" />
                <a href="/payouts">Payouts</a>
              </MenuLink>
              <MenuLink>
                <img src={icon04} alt="" />
                <a href="/order-histroy">Order History</a>
              </MenuLink>
              <MenuLink>
                <img src={icon05} alt="" />
                <a href="/referral-program">Referral Program</a>
              </MenuLink>
            </Menu>
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
                  <img src={package_icon} alt=""></img>
                  <h3>BALANCE</h3>
                </Header>
                <Button>Cash Out</Button>
              </Heading>
              <Balance>$ {this.state.info.balance}</Balance>
              <BalanceBox>
                <div>
                  <p>TOTAL PROFIT</p>
                  <span>$ {this.state.info.profit.total}</span>
                </div>
                <div>
                  <p>BTC/USD</p>
                  <span>$ 38,720.24</span>
                </div>
                <div>
                  <p>DAILY PROFIT</p>
                  <span>$ {this.state.info.profit.daily}</span>
                </div>
              </BalanceBox>
            </PaymentBox>
            <ReferralInfo>
              <Heading>
                <Header>
                  <img src={package_icon} alt=""></img>
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
  }
}
