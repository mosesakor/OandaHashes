import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';

import Carousel from '../Components/Carousel';
import PackageData from '../Components/PackageData';
import Package from '../Components/Package';

import icon01 from '../images/icon01.svg';
import icon02 from '../images/icon02.svg';
import icon03 from '../images/icon03.svg';
import icon04 from '../images/icon04.svg';

import background from '../images/atom_background.svg';
import background2 from '../images/bg-form.svg';

import about_image from '../images/about_image.svg';

import Footer from '../Components/Footer';
import Button from '../Components/Button';
import Input from '../Components/Input';

const Container = styled.div`
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
  margin: 1rem;
  padding: 1rem;
`;

const MainInfo = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 150px 0 50px 0;

  h1 {
    font-size: 40px;
    line-height: 48px;
    color: var(--heading);
  }

  p {
    font-size: 16px;
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

const MainInfoForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;

  @media (min-width: 980px) {
    margin: 0;
    flex-direction: row;
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
    color: var(--link-active);
    margin-right: 10px;
  }
  h2 {
    color: var(--heading);
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
        border-left: 1px solid var(--border-full);
      }

      &:nth-child(1),
      &:nth-child(2) {
        border-top: 0;
      }
    }
  }
`;

const Brochure = styled.div`
  padding: 15px;
  border-top: 1px solid var(--border-full);

  img {
    width: 56px;
  }

  h3 {
    color: var(--heading);
    padding-bottom: 0.25rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

const About = styled.div`
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
    color: var(--link-active);
  }

  h2 {
    font-size: 2rem;
    color: var(--heading);
  }

  h4 {
    font-size: 1.25rem;
    color: var(--heading);
  }

  p {
    margin: 0px 0px 24px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 980px) {
    margin-top: 30px;
    text-align: left;
    padding: 40px;
  }
`;

const Packages = styled.div`
  h2 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--heading);
  }
`;

const Duration = styled.ul`
  padding: 0;

  li {
    list-style-type: none;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    margin: 8px;
    font-weight: 600;
    font-size: 1rem;
    background-color: var(--background-tertiary);
    border: 1px solid var(--border);

    &:hover {
      background-color: var(--background-secondary);
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: 648px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  c @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const FastStart = styled.div`
  background-image: url(${background2});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px 20px 20px 20px;

  @media (min-width: 980px) {
    display: flex;
    padding: 40px 20px 20px 20px;
  }
`;

const Title = styled.div`
  text-align: center;
  color: var(--heading);

  @media (min-width: 980px) {
    text-align: left;
    width: 600px;
    margin-bottom: 20px;

    h2 {
      font-size: 40px;
    }
  }
`;

const Form = styled.div`
  @media (min-width: 980px) {
    margin-top: 80px;
    padding-left: 10%;
  }
`;

const Slider = styled.div``;

const LastSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid var(--border-full);
  border-radius: 8px 8px 0 0;
  padding: 2rem 1rem 2rem;
`;

export default class Home extends React.PureComponent {
  render() {
    return (
      <Container>
        <MainSection>
          <Navbar />
          <Box>
            <MainInfo>
              <h1>The Future of Cryptocurrency Mining is Here</h1>
              <p>AtomicHashes opens access to eco-mining for everyone</p>
            </MainInfo>
            <MainInfoForm>
              <Input placeholder="Enter e-mail"></Input>
              <Button>
                <span>Get Started</span>
              </Button>
            </MainInfoForm>
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
                The presence of regular payments, a variety of mining packages
                and an easy-to-use interface provide you with a stable and
                passive income.
              </p>
            </Brochure>
          </BrochureWrapper>
        </Section>
        <Section>
          <About>
            <Image>
              <img src={about_image} alt=""></img>
            </Image>
            <Text>
              <h2>
                <span>What is</span> AtomicHashes?
              </h2>
              <h4>Eco mining with the latest hardware for everyone</h4>
              <p>
                We provide mining services that use only renewable energy. The
                platform is intended for both beginners and professionals in the
                field of cryptocurrency.
              </p>
              <Button>
                <span>Get Started</span>
              </Button>
            </Text>
          </About>
        </Section>
        <Section>
          <Packages>
            <h2>Our Plans</h2>
            <Duration>
              <li>2 months</li>
              <li>4 months</li>
              <li>8 months</li>
            </Duration>
            <Content>
              {PackageData.map((v) => (
                <Package info={v} />
              ))}
            </Content>
          </Packages>
        </Section>
        <Section>
          <FastStart>
            <Title>
              <h2>
                Try mining with AtomicHashes today and get your first profit
                within 24 hours
              </h2>
            </Title>
            <Form>
              <MainInfoForm>
                <Input placeholder="Enter e-mail"></Input>
                <Button>
                  <span>Get Started</span>
                </Button>
              </MainInfoForm>
            </Form>
          </FastStart>
        </Section>
        <Section>
          <Title>
            <h2>Reviews</h2>
          </Title>
          <Slider>
            <Carousel />
          </Slider>
        </Section>
        <LastSection>
          <Footer />
        </LastSection>
      </Container>
    );
  }
}
