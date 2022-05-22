import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { PackageInfo } from './PackageData';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-secondary);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #6e6e74;
  margin-bottom: 10px;

  h2 {
    font-size: 1.25rem !important;
  }
  img {
    width: 2rem;
  }
`;

const Body = styled.div`
  flex-grow: 1;
  padding: 1rem 0;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 0;
    margin: 0;

    p {
      margin: 6px 0;
      color: var(--heading);
      &:first-child {
        color: var(--text);
      }
    }
  }

  span {
    display: block;
  }
`;

const Footing = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  p {
    font-size: 40px;
    margin: 0.5rem 0;
    text-align: right;
    color: var(--heading);
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
          <Button>
            <span>I want this package</span>
          </Button>
        </Footing>
      </Item>
    );
  }
}
