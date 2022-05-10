import React from 'react';
import styled from 'styled-components';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import background from '../images/bg2.svg';
import icon01 from '../images/icon01.svg';
import icon02 from '../images/icon02.svg';
import icon03 from '../images/icon03.svg';
import icon04 from '../images/icon04.svg';
import about_image from '../images/about-bg.svg';

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

const ContentBox = styled.div`
  text-align: center;

  span {
    color: rgb(96, 185, 103);
    margin-right: 10px;
  }
  h2 {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 32px;
  }
`;

const BrochureWrapper = styled.div`
  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      &:last-child,
      &:nth-child(2) {
        border-left: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

const Brochure = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  img {
    width: 56px;
  }

  h3 {
    margin: 0px 0px 10px;
  }

  p {
    margin: 0;
    color: #6e6e74;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
  }
`;

const AboutInfo = styled.div`
  @media (min-width: 980px) {
    display: flex;
  }
`;

const Image = styled.div`
  @media (min-width: 980px) {
    width: 50%;
  }
`;

const Text = styled.div`
  text-align: center;

  span {
    color: rgb(96, 185, 103);
  }

  h2 {
    font-size: 32px;
    margin: 0px 0px 40px;
  }

  h4 {
    margin: 0px 0px 15px;
    font-size: 18px;
  }

  p {
    margin: 0px 0px 24px;
    color: #6e6e74;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    max-width: 500px;
    margin: 10px auto;
  }

  button {
    border: none;
    font-size: 16px;
    font-weight: 600;
    max-width: 380px;
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

  @media (min-width: 980px) {
    margin-top: 30px;
    text-align: left;
    padding: 40px;
  }
`;

const LastSection = styled.div`
  border-top: 2px solid rgba(255, 255, 255, 0.07);
  background-color: rgba(255, 255, 255, 0.07);
  padding: 30px 30px;
`;

const About = () => {
  return (
    <Container>
      <MainSection>
        <Navbar />
        <Box>
          <MainInfo>
            <h1>ABOUT</h1>
            <p>Green Hashes opens access to eco-mining for everyone</p>
          </MainInfo>
        </Box>
      </MainSection>
      <Section>
        <ContentBox>
          <h2>
            <span>Services</span>That We Continue To Improve
          </h2>
        </ContentBox>
        <BrochureWrapper>
          <Brochure>
            <img src={icon01} alt=""></img>
            <h3>Security and Privacy</h3>
            <p>
              We present a mining service that provides a high degree of
              confidentiality. In this regard, we keep the collection of user
              data to a minimum and are responsible for the security of this
              server.
            </p>
          </Brochure>
          <Brochure>
            <img src={icon02} alt=""></img>
            <h3>Eco-friendly product</h3>
            <p>
              For the platform we offer, we have acquired high-quality and
              environmentally friendly equipment for the efficiency of the
              mining system.
            </p>
          </Brochure>
          <Brochure>
            <img src={icon03} alt=""></img>
            <h3>Instant payouts</h3>
            <p>
              The income from your mining is accrued daily using an automatic
              payout system.
            </p>
          </Brochure>
          <Brochure>
            <img src={icon04} alt=""></img>
            <h3>Stable income</h3>
            <p>
              The presence of regular payments, a variety of mining packages and
              an easy-to-use interface provide you with a stable and passive
              income.
            </p>
          </Brochure>
        </BrochureWrapper>
      </Section>
      <Section>
        <AboutInfo>
          <Image>
            <img src={about_image} alt=""></img>
          </Image>
          <Text>
            <h2>
              <span>Cloud</span> Mining
            </h2>
            <p>
              We provide mining services that use only renewable energy. The
              platform is intended for both beginners and professionals in the
              field of cryptocurrency.
            </p>
            <p>
              When using our service, our users get the opportunity to control
              their profits around the clock, and the company at that time takes
              care of all the concerns to ensure safety and smooth operation.
            </p>
            <button>Get Started</button>
          </Text>
        </AboutInfo>
      </Section>
      <LastSection>
        <Footer />
      </LastSection>
    </Container>
  );
};

export default About;
