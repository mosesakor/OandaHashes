import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  font-size: 1rem;
  font-weight: 600;
  background-color: var(--background);
  color: var(--text);
  cursor: pointer;

  &:hover {
    background-color: var(--background-tertiary);
    color: var(--link-active);
  }

  span {
    cursor: pointer;
  }
`;

type Props = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => any;
};

export default class Button extends React.PureComponent<Props> {
  render() {
    return (
      <ButtonContainer onClick={this.props.onClick}>
        {this.props.children}
      </ButtonContainer>
    );
  }
}
