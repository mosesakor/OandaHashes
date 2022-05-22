import React from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

// import Atom from '../images/atom.png';

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '15rem' : '0')};
    background-color: ${({ isOpen }) =>
      isOpen ? 'var(--background-secondary)' : 'transparent'};
    border-radius: 8px;
    border: 1px solid
      ${({ isOpen }) => (isOpen ? 'var(--border)' : 'transparent')};
    transition: max-height 0.3s ease, background-color 0.15s ease,
      border 0.15s ease;
    width: 100%;
    align-items: flex-end;
  }
`;

const MenuLink = styled.a`
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  marging-left: 20px;
  text-decoration: none;
  color: white;
  transition: all 0.2s ease-in;
  font-size: 17px;

  &:hover {
    border-radius: 5px;
    color: #ffa244;
  }

  @media (max-width: 768px) {
    &:hover {
      background: none;
    }
  }
`;

export const Nav = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Logo = styled.a`
  img {
    width: 100px;
  }
`;

const Hamburger = styled.div`
  padding: 20px;
  display: none;
  flex-direction: column;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  cursor: pointer;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: var(--heading);
    background-color: var(--background-secondary);
    border: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s ease;
    text-align: center;

    &:hover {
      background-color: var(--background-tertiary);
    }
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;

    &:first-child {
      margin-right: 0.5rem;
      background: var(--background-tertiary);

      &:hover {
        background-color: var(--background-secondary);
      }
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

type NavbarState = {
  isOpen: boolean;
  isLoggedIn: boolean;
};

export default class Navbar extends React.PureComponent<{}, NavbarState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      isOpen: false,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoggedIn: new Cookies().get('token') !== undefined });
  }

  render() {
    return (
      <Nav>
        <Logo>
          <a href={'/'}>AtomicHashes</a>
        </Logo>
        <Hamburger
          onClick={() => this.setState((v) => ({ isOpen: !v.isOpen }))}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={this.state.isOpen}>
          <MenuLink href={'/about'}>About</MenuLink>
          <MenuLink href={'/investment-packages'}>Investment packages</MenuLink>
          <MenuLink href={'/equipment'}>Equipment</MenuLink>
          <MenuLink href={'/referral-program'}>Referral Program</MenuLink>
          <MenuLink href={'/faq'}>FAQ</MenuLink>
        </Menu>
        {this.state.isLoggedIn ? (
          <ButtonContainer>
            <a href={'/overview'}>Overview</a>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <a href={'/login'}>Log In</a>
            <a href={'/register'}>Get Started</a>
          </ButtonContainer>
        )}
      </Nav>
    );
  }
}
