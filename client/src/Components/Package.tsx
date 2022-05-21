import React from 'react';
import styled from 'styled-components';
import { PackageInfo } from './PackageData';

const Item = styled.div`
  background-color: rgba(255, 255, 255, 0.07);
  min-height: 435px;
  padding: 0px 8px;
  border-radius: 8px;

  @media (max-width: 980px) {
    flex: 0 1 50%;
  }

  @media (max-width: 1280px) {
    flex: 0 1 33.33333%;
  }

  hr {
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  border-bottom: 1px solid #6e6e74;
  margin-bottom: 10px;

  h2 {
    font-size: 18px !important;
  }
  img {
    width: 56px;
  }
`;

const Body = styled.div`
  padding: 20px 0;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 0;
    margin: 0;

    p {
      margin: 6px 0;
      &:first-child {
        color: #6e6e74;
      }
    }
  }

  span {
    display: block;
  }
`;

const Footing = styled.div`
  margin: 0;

  p {
    font-size: 40px;
    margin: 15px 0 0;
  }

  button {
    border: none;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    height: 64px;
    padding: 10px 32px;
    border-radius: 8px;
    background-color: #ffa244;
    cursor: pointer;
    transition: background 0.25s linear;

    &:hover {
      filter: brightness(80%);
    }
  }
`;

type PackageProps = {
  info: PackageInfo;
};

export default class Package extends React.PureComponent<PackageProps> {
  render() {
    return (
      <Item>
        <Heading>
          <h2>{this.props.info.type}</h2>
          <img src={this.props.info.img} alt="package type"></img>
        </Heading>
        <Body>
          <div>
            <p>Referral level</p>
            <p>{this.props.info.level}</p>
          </div>
          <div>
            <p>Duration of the contract</p>
            <p>{this.props.info.duration}</p>
          </div>
          <div>
            <p>Daily profit</p>
            <p>{this.props.info.profit}</p>
          </div>
          <div>
            <p>Number of hashes</p>
            <p>{this.props.info.hashes}</p>
          </div>
        </Body>
        <Footing>
          <p>${this.props.info.price}</p>
          <button>Get Started</button>
        </Footing>
      </Item>
    );
  }
}
