import React from 'react';
import styled from 'styled-components';

import Navbar from '../Components/Navbar';
import background from '../images/bg6.svg';
import Accordion from '../Components/Accordion';
import Footer from '../Components/Footer';

const Container = styled.div`
  color: #fff;
  overflow: hidden;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const MainSection = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 15px 30px;
  background-attachment: fixed;
`;

const Section = styled.div`
  margin-bottom: 50px;
  padding: 20px;
`;

const MainInfo = styled.div`
max-width: 3000;
margin: 0 auto;
position: relative;
z-index: 2;
text-align: center;
padding: 150px 0 50px 0;

h1 {
  font-size: 40px;
  font-weight: 900;
  line-height: 48px;
}

p {
  font-size: 22px;
  font-weight: 600;
}

@media(min-width: 980px) {
  max-width: 500px;
  margin 0;
  text-align: left;
  padding: 50px 0px;

  h1 {
    font-size: 64px;
    line-height: 72px;
  }
  p {
    font-size: 22px;
  }
}
`;

const Box = styled.div`
  @media (min-width: 980px) {
    text-align: left;
  }
`;

const LastSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid var(--border-full);
  border-radius: 8px 8px 0 0;
  padding: 2rem 1rem 2rem;
`;

export default class Faq extends React.PureComponent {
  render() {
    return (
      <Container>
        <MainSection>
          <Navbar />
          <Box>
            <MainInfo>
              <h1>FAQ</h1>
              <p>
                Here we have tried to answer frequently asked questions. Please
                read the below before contacting support.
              </p>
            </MainInfo>
          </Box>
        </MainSection>
        <Section>
          <Box>
            <Accordion title="1. How to start mining with AtomicHashes?">
              Read the Terms of Service, create an account, login and
              familiarize yourself with the currently available packages.
            </Accordion>
            <Accordion title="2. How can I purchase a package?">
              Select the package that interests you and follow the on-screen
              instructions.
              <br />
              In order to pay for any package, a virtual wallet is required
              which will be used to transfer the amount required for the
              selected package to the wallet address that is indicated.
            </Accordion>
            <Accordion title="3. How to withdraw earned profit?">
              Enter the Payout section, enter your wallet address and the amount
              you would like to withdraw. The amount should not exceed your
              account balance and your wallet address must be valid, otherwise
              the withdrawal is not possible.
            </Accordion>
            <Accordion title="4. How to use the Referral Program?">
              You can find information about the referral program on our
              website. Invite a friend, purchase packages together and get your
              bonus.
            </Accordion>
            <Accordion title="5. Is there a minimum or maximum purchase amount?">
              The prices range from $100 to $18,000. For more details, enter the
              Packages tab.
            </Accordion>
          </Box>
        </Section>
        <LastSection>
          <Footer />
        </LastSection>
      </Container>
    );
  }
}
