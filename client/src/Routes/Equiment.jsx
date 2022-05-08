import React from "react"
import styled from "styled-components"
import Navbar from "../Components/Navbar.jsx"
import background from "../images/atom_background.svg";
import background2 from "../images/bg-form.svg"

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
max-width: 3000;
margin: 0 auto;
position: relative;
z-index: 2;
text-align: center;
padding: 150px 0 50px 0;

h1 {
  font-size: 40px;
  line-height: 48px;
  font-weight: 900;
}

p {
  font-size: 16px;
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
`

const MainInfoForm = styled.div`
margin: 0 auto;
text-align: center;
max-width: 580px;

input {
  width: 80%;
  height: 20px;
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
  align-items: center;
  justify-content: center;
  height: 55px;
  font-weight: 600;
  padding: 10px;
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


const FastStart = styled.div`
background-image: url(${background2});
background-repeat: no-repeat;
background-size: cover;
background-color: #131213;
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

const LastSection = styled.div`
border-top: 2px solid rgba(255,255,255,.07);
background-color: rgba(255,255,255,.07);
padding: 30px 30px;
`

const Items = styled.div`
@media (min-width: 980px) {
  display: grid;
  grid-template-columns: auto auto;
  padding: 50px;
  text-align: center;
}
`

const Item = styled.div`
background-color: #131213;
text-align: center;
margin-top: 20%;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
width: 75%;
padding: 10px;


ul { 
  list-style-type: "🔥 ";
  @media (min-width: 980px) { 
    padding: 10px;
    display: inline-block;
    *display: inline;
    zoom: 1
  }
}

ul li {
  text-align: left;
  padding: 10px;
  color: #5B5B5F;
  font-size: 12px;
}

img {
  height: 200px;
  width: 200px;
  text-align: center;
  margin-top: -10%;
}

h2 {
    padding: 2%;
}

p {
    padding: 5%;
    font-size: 12px;
    color: #6E6E74;
}

@media (max-width: 980px) {
    img {
        height: 150px;
        width: 150px;
        text-align: center;
        margin-top: -15%;
    }
}
`

const ListItem = styled.div`
border: 1px solid #131213;
padding: 15px;
margin: 20px;
border-radius: 10px;
width: 50%;
word-wrap: break-word;

@media (min-width: 980px) { 
  display: inline-block;
  width: 30%;
  height: 200;
  margin: 4px;
  padding: 20px;
}

p {
  color: #58585C;
}
`

const List = styled.div`
@media (min-width: 980px) { 
  padding: 10px;
  width: 55%;
  margin-left: 10%;
}
`


const Equipment = () => {
  return (
    <Container>
      <MainSection>
        <Navbar />
        <Box>
          <MainInfo>
            <h1>Mining Equipment</h1>
            <p>AtomicHashes provides an all-in-one staking solution. Let us do the work, while you earn the rewards.</p>
          </MainInfo>
        </Box>
      </MainSection>
      <Section>
        <Items>
          <Item>
            <img src={"https://media.discordapp.net/attachments/775447356702851113/969254454010470440/eqp1.png?width=645&height=616"} alt="Loading image..." />
            <h2>Asic Whatsminer M20S 70TH/s</h2>
            <p>MicroBT has released ASIC Whatsminer M20s 70 TH / s for Bitcoin mining on the SHA-256 algorithm.<br /><br />
              ASIC Whatsminer M20s 70 TH / s is made of high quality aluminum, so the structure of the device is reliably protected from mechanical damage. On the sides there are special coolers in the amount of 2 pieces, which provide effective cooling, protecting the ASIC from overheating.</p><br />
            <ul>
              <li>Scrypt mining hashrate: 70Th/s</li>
              <li>Hashing algorithm: SHA256</li>
              <li>Power efficiency: 67 J/GHs</li>
            </ul>
            <ul>
              <li>Power consumption: 3360W</li>
              <li>Chip name: TSMC</li>
              <li>Noise level: 75db</li>
            </ul>
          </Item>
          <Item>
            <img src={"https://media.discordapp.net/attachments/775447356702851113/969254454471827497/eqp2.png?width=498&height=616"} alt="Loading image..." />
            <h2>Miner ASIC Antminer S15</h2>
            <p>The antminer S9 with 16nm chips, which held the lead for almost two years, was replaced by a new model - the asic Bitmain Antminer S15.<br /><br />
              Power consumption is comparatively economical, and the case uses a lightweight but durable aluminum alloy to help speed up cooling.</p><br />
            <ul>
              <li>Scrypt mining hashrate: 28 Th/s</li>
              <li>Hashing algorithm: SHA256</li>
              <li>Power efficiency: 57 J/GHs</li>
            </ul>
            <ul>
              <li>Power consumption: 1600W</li>
              <li>Chip name: BM1391</li>
              <li>Noise level: 80db</li>
            </ul>
          </Item>
        </Items>
      </Section>
      <Section>
        <List>
          <ListItem>
            <h2>Consistency</h2>
            <p>The company has taken care of the systematization of the functions for activating packages and payments.</p>
          </ListItem>
          <ListItem>
            <h2>Regularity</h2>
            <p>Regularity and automation of payments are provided for quick profit without problems.</p>
          </ListItem>
          <ListItem>
            <h2>Reliability</h2>
            <p>The company is responsible for the security of this server and provides mining, which ensures a greater degree of confidentiality.</p>
          </ListItem>
          <ListItem>
            <h2>Innovation</h2>
            <p>We have managed to open access to eco-mining for everyone.</p>
          </ListItem>
          <ListItem>
            <h2>Functionality</h2>
            <p>Thanks to the functionality of the server, buying, withdrawing and tracking your balance are not difficult for our clients.</p>
          </ListItem>
          <ListItem>
            <h2>Individuality</h2>
            <p>Our support team tries to individually approach each client, taking into account your wishes, we try to implement this as soon as possible for further use.</p>
          </ListItem>
        </List>
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
      <LastSection>
        <Footer />
      </LastSection>
    </Container>

  )
}

export default Equipment;