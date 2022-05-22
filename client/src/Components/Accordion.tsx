import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;
`;

const Title = styled.div<{ clicked: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.clicked ? '#ffa244' : '#fff')};
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reveal = styled.div<{ clicked: boolean }>`
  display: ${(props) => (props.clicked ? 'block' : 'none')};
  margin-top: 1rem;
  font-weight: 300;
  line-height: 1.1rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type AccordionProps = {
  title: string;
  children: any;
};

type AccordionState = {
  collapse: boolean;
};

export default class Accordion extends React.PureComponent<
  AccordionProps,
  AccordionState
> {
  constructor(props: AccordionProps | Readonly<AccordionProps>) {
    super(props);
    this.state = {
      collapse: false,
    };
  }

  render() {
    return (
      <Container>
        <Title
          onClick={() => this.setState((v) => ({ collapse: !v.collapse }))}
          clicked={this.state.collapse}
        >
          <Name>
            <span>{this.props.title}</span>
          </Name>
          {this.state.collapse ? (
            <Indicator>-</Indicator>
          ) : (
            <Indicator>+</Indicator>
          )}
        </Title>
        <Reveal clicked={this.state.collapse}>{this.props.children}</Reveal>
      </Container>
    );
  }
}
