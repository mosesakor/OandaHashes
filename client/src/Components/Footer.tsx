import React from 'react';
import styled from 'styled-components';

import ig from '../images/ig.svg';
import tel from '../images/tel.svg';
import fb from '../images/fb.svg';
import twt from '../images/twt.svg';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  @media (min-width: 980px) {
    flex-direction: row;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  img {
    color: #fff;
    background-repeat: no-repeat;
    width: 35%;
    position: relative;
    top: 20%;
  }
`;

const Links = styled.div`
  display: flex;
  margin-bottom: 10px;

  div {
    font-size: 24px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin-right: 15px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    &:nth-child(3) {
      img {
        width: 22%;
      }
    }
  }
`;

const Copyright = styled.div`
  color: #6e6e74;
  font-size: 12px;

  span {
    margin-right: 15px;
  }
`;

const Mail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;

  div {
  }

  a {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
    max-width: 260px;
    display: block;
    padding: 5px;
  }
`;

export default class Footer extends React.PureComponent {
  render() {
    return (
      <Container>
        <Socials>
          <Links>
            <div>
              {' '}
              <img src={ig} alt="instagram" />
            </div>
            <div>
              {' '}
              <img src={tel} alt="telegram" />
            </div>
            <div>
              {' '}
              <img src={fb} alt="facebook" />
            </div>
            <div>
              {' '}
              <img src={twt} alt="twitter" />
            </div>
          </Links>
          <Copyright>
            <span>Copyright © 2021</span>
            <span>Privacy policy</span>
          </Copyright>
        </Socials>
        <Mail>
          <div>
            <a href="mailto:support@AtomicHashes.io">support@AtomicHashes.io</a>
          </div>
          <div>
            <span>
              If you have any questions about the service or have suggestions,
              write to us
            </span>
          </div>
        </Mail>
        <Mail>
          <div>
            <a href="tg.io">Telegram AtomicHashes</a>
          </div>
          <div>
            <span>
              Join our telegram there is alot of useful information on
              investments
            </span>
          </div>
        </Mail>
      </Container>
    );
  }
}
