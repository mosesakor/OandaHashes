import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.input`
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--background);
  border: 1px solid var(--border);
  transition: background-color 0.15s ease, color 0.15s ease;
  color: whitesmoke;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: var(--background-tertiary);
    color: var(--link-active);
  }
`;

type Props = {
  placeholder?: string;
  children?: React.ReactNode;
};

export default class Input extends React.PureComponent<Props> {
  render() {
    return (
      <InputContainer placeholder={this.props.placeholder}>
        {this.props.children}
      </InputContainer>
    );
  }
}
