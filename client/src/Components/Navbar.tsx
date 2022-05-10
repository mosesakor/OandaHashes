import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Atom from '../images/atom.png';

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
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
    cursor: pointer;
    color: #fff;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    height: 48px;
    padding: 8px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.5s linear;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    &:first-child {
      margin-right: 6px;
      background: rgba(255, 255, 255, 0);

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <a href={'/'}>
          <img alt="AtomicHashes"></img>
        </a>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href={'/about'}>About</MenuLink>
        <MenuLink href={'/investment-packages'}>Investment packages</MenuLink>
        <MenuLink href={'/equipment'}>Equipment</MenuLink>
        <MenuLink href={'/referral-program'}>Referral Program</MenuLink>
        <MenuLink href={'/faq'}>FAQ</MenuLink>
      </Menu>
      <ButtonContainer>
        <a href={"/login"}>Log In</a>
        <a href={'/register'}>Get Started</a>
      </ButtonContainer>
    </Nav>
  );
};

export default Navbar;
