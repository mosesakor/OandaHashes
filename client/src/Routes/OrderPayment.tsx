import React from 'react';
import styled from 'styled-components';

import PackageData, { PackageInfo } from '../Components/PackageData';

import icon01 from '../images/navicon01.svg';
import icon02 from '../images/navicon02.svg';
import icon03 from '../images/navicon03.svg';
import icon04 from '../images/navicon04.svg';
import icon05 from '../images/navicon05.svg';
import barcode from '../images/barcode.png';
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
`;

const Heading = styled.div``;

const PaymentBox = styled.div`
  background: rgba(255, 255, 255, 0.07);
  padding: 15px;

  @media (min-width: 1000px) {
    min-height: 500px;
    margin-right: 20px;
  }
`;

const PaymentInfo = styled.div`
  font-size: 24px;
  font-weight: 500;

  p {
    color: rgb(96, 185, 103);
  }

  span {
    color: rgb(223, 133, 43);
  }
`;

const Address = styled.div`
  font-size: 12px;
`;

const Barcode = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  width: 180px;

  img {
    width: 100%;
  }
`;

const PackageSelector = styled.div`
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.07);
  padding: 15px;

  @media (min-width: 1000px) {
    min-height: 500px;
    margin-top: 0;
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

const Info = styled.div`
  margin-top: 15px;

  select {
    color: #fff;
    width: 80%;
    height: 56px;
    padding: 20px 10px;
    background: rgba(255, 255, 255, 0.07);
    border: 0 solid #e7e7e7;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    option {
      width: 50px;
    }
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  height: 100px;

  button {
    height: 20px;
    margin: 0 8px;
  }
`;

const Update = styled.button`
  border: 0;
  color: #fff;
  min-height: 56px;
  cursor: pointer;
  padding: 16px 24px;
  background: rgb(223, 133, 43);
  border-radius: 90px;
  transition: background 0.5s linear 0s;
  font-size: 13px;
`;

const Specification = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
  }

  p {
    color: rgb(96, 185, 103);
  }

  span {
    color: rgb(223, 133, 43);
  }
`;

const ContentArea = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Reinvest = styled.div``;

type OrderPaymentState = {
  count: number;
  amount: number;
  packageType: PackageInfo;
};

export default class OrderPayment extends React.PureComponent<
  {},
  OrderPaymentState
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      count: 1,
      amount: 0.1,
      packageType: {} as PackageInfo,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
  }

  getPackage(package_name: string) {
    console.log(package_name, 'tet');

    switch (package_name) {
      case 'Silver 1':
        this.setState({ packageType: PackageData[0] });
        break;
      case 'Silver 2':
        this.setState({ packageType: PackageData[1] });
        break;
      case 'Gold 1':
        this.setState({ packageType: PackageData[2] });
        break;
      case 'Gold 2':
        this.setState({ packageType: PackageData[3] });
        break;
      case 'Platinum 1':
        this.setState({ packageType: PackageData[4] });
        break;
      case 'Platinum 2':
        this.setState({ packageType: PackageData[5] });
        break;
      case 'Diamond 1':
        this.setState({ packageType: PackageData[6] });
        break;
      case 'Diamond 2':
        this.setState({ packageType: PackageData[7] });
        break;
      default:
        this.setState({ packageType: PackageData[0] });
    }

    console.log(this.state.packageType);
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.getPackage(e.target.value);
    console.log(this.state.packageType);
  }

  handleAmount(e: any) {
    this.setState((v) => ({ amount: v.count * v.packageType.btc }));
    console.log(this.state.amount);
  }

  render() {
    return (
      <Container>
        <Nav>
          <Menu>
            <MenuLink>
              <Menu>
                <MenuLink>
                  {' '}
                  <img src={icon01} alt="overview icon" />{' '}
                  <a href="/overview">Overview</a>
                </MenuLink>
                <MenuLink>
                  <img src={icon02} alt="" /> <a href="/order">Buy a package</a>
                </MenuLink>
                <MenuLink>
                  <img src={icon03} alt="" /> <a href="/payouts">Payouts</a>
                </MenuLink>
                <MenuLink>
                  <img src={icon04} alt="" />{' '}
                  <a href="/order-history">Order History</a>
                </MenuLink>
                <MenuLink>
                  <img src={icon05} alt="" />{' '}
                  <a href="/referral-program">Referral Program</a>
                </MenuLink>
              </Menu>
            </MenuLink>
          </Menu>
        </Nav>
        <MainSection>
          <Heading>
            <h1>Order Payment</h1>
          </Heading>
          <ContentArea>
            <PaymentBox>
              <PaymentInfo>
                <p>
                  Please send <span>{this.state.amount}</span> BTC to the
                  following address or scan the QR code.
                </p>
                <Address>
                  <span>Payment address</span>
                  <p>3BrjvTxezwv8w2UnVScPES5BZGQ5491nsq</p>
                </Address>
                <Barcode>
                  <img src={barcode} alt="barcode"></img>
                </Barcode>
              </PaymentInfo>
            </PaymentBox>
            <PackageSelector>
              <Heading>
                <Header>
                  <img src={package_icon} alt="package icon"></img>
                  <h3>Selected Package</h3>
                </Header>
              </Heading>
              <Info>
                <select onChange={(e) => this.handleChange(e)}>
                  <option value="Silver 1">Silver1</option>
                  <option value="Silver 2">Silver 2</option>
                  <option value="Gold 1">Gold 1</option>
                  <option value="Gold 2">Gold 2</option>
                  <option value="Platinum 1">Platinum 1</option>
                  <option value="Platinum 2">Platinum 2</option>
                  <option value="Diamond 1">Diamond 1</option>
                  <option value="Diamond 2">Diamond 2</option>
                </select>
                <Counter>
                  <p>Amount</p>
                  <button
                    onClick={() =>
                      this.setState((v) => ({
                        count: v.count === 1 ? v.count : v.count - 1,
                      }))
                    }
                  >
                    -
                  </button>
                  <span>{this.state.count}</span>
                  <button
                    onClick={() =>
                      this.setState((v) => ({ count: v.count + 1 }))
                    }
                  >
                    +
                  </button>
                  <Update onClick={this.handleAmount}>Update</Update>
                </Counter>
              </Info>
              <Specification>
                <div>
                  <p>Hash</p>
                  <span>test</span>
                </div>
                <div>
                  <p>Duration</p>
                  <span>{}</span>
                </div>
                <div>
                  <p>Order Code</p>
                  <span>{}</span>
                </div>
              </Specification>
            </PackageSelector>
            <Reinvest></Reinvest>
          </ContentArea>
        </MainSection>
      </Container>
    );
  }
}
