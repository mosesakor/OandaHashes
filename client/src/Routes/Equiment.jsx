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

const LastSection = styled.div`
border-top: 2px solid rgba(255,255,255,.07);
background-color: rgba(255,255,255,.07);
padding: 30px 30px;
`

const Item = styled.div`
background-color: #131213;
text-align: center;
margin-top: 20%;
border-radius: 10px;

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
                <Item>
                    <img src={"https://media.discordapp.net/attachments/775447356702851113/969254454010470440/eqp1.png?width=645&height=616"} alt="Loading image..." />
                    <h2>Item name</h2>
                    <p>MicroBT has released ASIC Whatsminer M20s 70 TH / s for Bitcoin mining on the SHA-256 algorithm.<br/><br/>
                        ASIC Whatsminer M20s 70 TH / s is made of high quality aluminum, so the structure of the device is reliably protected from mechanical damage. On the sides there are special coolers in the amount of 2 pieces, which provide effective cooling, protecting the ASIC from overheating.</p>
                </Item>
                <Item>
                    <img src={"https://media.discordapp.net/attachments/775447356702851113/969254454471827497/eqp2.png?width=498&height=616"} alt="Loading image..." />
                    <h2>Item name</h2>
                    <p>The antminer S9 with 16nm chips, which held the lead for almost two years, was replaced by a new model - the asic Bitmain Antminer S15.<br/><br/>
                        Power consumption is comparatively economical, and the case uses a lightweight but durable aluminum alloy to help speed up cooling.</p>
                </Item>
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