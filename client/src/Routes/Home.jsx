import React from "react"
import styled from "styled-components"
import Navbar from "../Components/Navbar.jsx"

import Carousel from "../Components/Carousel.jsx"
import PackageData from '../Components/PackageData';
import Package from '../Components/Package';

import icon01 from "../images/icon01.svg"
import icon02 from "../images/icon02.svg"
import icon03 from "../images/icon03.svg"
import icon04 from "../images/icon04.svg"

import background from "../images/atom_background.svg";
import background2 from "../images/bg-form.svg"



import about_image from "../images/about_image.svg"

import Footer from "../Components/Footer"

const Container = styled.div`
color: #fff;
overflow: hidden;
padding-bottom: 0;
margin-bottom: 0;
`

const MainSection = styled.div`
background-image: url(${background});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding: 0 15px 30px;
background-attachment: fixed;
`


const Section = styled.div`
margin-bottom: 50px;
padding: 10px;
`

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
`

const MainInfoForm = styled.div`
margin: 0 auto;
text-align: center;
max-width: 580px;

input {
  width: 80%;
  height: 34px;
  padding: 15px 24px;
  border-radius: 8px;
  background-color: #fff;
  color: #a6a2a2;
  font-size: 14px;
  font-family: Gilroy,sans-serif;
  font-weight: 600;
}

button {
  border: none;
  max-width: 380px;
  margin-top: 12px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  height: 68px;
  padding: 10px 32px;
  border-radius: 8px;
  background-color: #ffa244;
  cursor: pointer;
  transition: background .25s linear;
}

@media(min-width: 980px) {
  max-width: 600px;
  margin 0;
  text-align: left;
  display: flex;
  
  button {
    margin-top: 0;
    margin-left: 10px;
    width: 300px;
  }
}
`

const Box = styled.div`
@media (min-width: 980px) {
  text-align: left;
}
`

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
`

const BrochureWrapper = styled.div`
  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      &:last-child, &:nth-child(2) {
        border-left: 1px solid rgba(255, 255, 255, 0.1);
      }

    }
  }
`

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
`

const About = styled.div`

@media (min-width: 980px) {
  display: flex;
}
`

const Image = styled.div`

@media (min-width: 980px) {
  width: 50%;
}

`

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
    margin: 0 auto;
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
    transition: background .25s linear;

    &:hover {
      filter: brightness(80%);
    }
  }

  @media (min-width: 980px) {
    margin-top: 30px;
    text-align: left;
    padding: 40px;
  }
`

const Packages = styled.div`

h2 {
  font-size: 48px;
  font-weight: 800;
}
`

const Duration = styled.ul`
padding: 0;

li {
  list-style-type: none;
  padding: 16px 16px;
  border-radius: 8px;
  text-align: center;
  margin: 8px;
  font-weight: 600;
  font-size: 16px;
  color: black;

  &:hover {
    background-color: #ffa244;
  }
}
`

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
c
@media (min-width: 1280px) {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}


`

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
`

const Heading = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 0px;
border-bottom: 1px solid #6e6e74;;
margin-bottom: 10px;


h2 {
  font-size: 18px;
}
img {
  width: 56px;
}
`

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
`

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
  transition: background .25s linear;

  &:hover {
    filter: brightness(80%);
  }
}
`

const FastStart = styled.div`
background-image: url(${background2});
background-repeat: no-repeat;
background-size: cover;
padding: 150px 20px 20px 20px;

@media (min-width: 980px) {
  display: flex;
  padding: 40px 20px 20px 20px;
}

`

const Title = styled.div`
text-align: center;

@media (min-width: 980px) {
  text-align: left;
  width: 600px;
  margin-bottom: 20px;

  h2 {
    font-size: 40px;
  }

}
`

const Form = styled.div`
@media (min-width: 980px) {
  margin-top: 80px;
  padding-left: 10%;
}

`

const Slider = styled.div`
`

const LastSection = styled.div`
border-top: 2px solid rgba(255,255,255,.07);
background-color: rgba(255,255,255,.07);
padding: 30px 30px;
`


const Home = () => {
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
            <input placeholder='Enter e-mail'></input>
            <button>Get Started</button>
          </MainInfoForm>
        </Box>
      </MainSection>
      <Section>
        <ContentBox>
          <h2><span>Services</span>That We Continue To Improve</h2>
        </ContentBox>
        <BrochureWrapper>
          <Brochure>
            <img src={icon01}></img>
            <h3>Security and Privacy</h3>
            <p>We present a mining service that provides a high degree of confidentiality. In this regard, we keep the collection of user data to a minimum and are responsible for the security of this server.</p>
          </Brochure>
          <Brochure>
            <img src={icon02}></img>
            <h3>Eco-friendly product</h3>
            <p>For the platform we offer, we have acquired high-quality and environmentally friendly equipment for the efficiency of the mining system.</p>
          </Brochure>
          <Brochure>
            <img src={icon03}></img>
            <h3>Instant payouts</h3>
            <p>The income from your mining is accrued daily using an automatic payout system.</p>
          </Brochure>
          <Brochure>
            <img src={icon04}></img>
            <h3>Stable income</h3>
            <p>The presence of regular payments, a variety of mining packages and an easy-to-use interface provide you with a stable and passive income.</p>
          </Brochure>
        </BrochureWrapper>
      </Section>
      <Section>
        <About>
          <Image><img src={about_image}></img></Image>
          <Text>
            <h2><span>What is</span> Greenhashes?</h2>
            <h4>Eco mining with the latest hardware for everyone</h4>
            <p>We provide mining services that use only renewable energy. The platform is intended for both beginners and professionals in the field of cryptocurrency.</p>
            <button>Get Started</button>
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
            {PackageData.map(({ type, img, level, duration, profit, hashes, price, btc }) => (
              <Package type={type} img={img} level={level} duration={duration} profit={profit} hashes={hashes} price={price} btc={btc} />
            ))}
          </Content>
        </Packages>
      </Section>
      <Section>
        <FastStart>
          <Title>
            <h2>
              Try mining with GreenHashes today and get your first profit within 24 hours
            </h2>
          </Title>
          <Form>
            <MainInfoForm>
              <input placeholder='Enter e-mail'></input>
              <button>Get Started</button>
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

  )
}

export default Home;