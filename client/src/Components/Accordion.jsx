import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;
`;

const Title = styled.div`
  font-size: 18px;
  color: ${(props) => (props.clicked ? '#ffa244' : '#fff')};
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reveal = styled.div`
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

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)} clicked={collapse}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? <Indicator>-</Indicator> : <Indicator>+</Indicator>}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
