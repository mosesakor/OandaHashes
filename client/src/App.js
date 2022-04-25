import './App.css';
import styled from "styled-components";
import Navbar from "./Components/Navbar.jsx"

import background from "./images/atom_background.svg";

const Container = styled.div`
`

const MainSection = styled.div`
color: #fff;
background-image: url(${background}) !important;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding: 0 15px;
background-attachment: fixed;
`

const Section = styled.div`
color: #fff;
`

const MainInfo = styled.div`
max-width: 1280px;
margin: 0 auto;
padding: 20px 0;
position: relative;
z-index: 2;
text-align: center;
padding: 220px 0 50px 0;

h1 {
  color: #fff;
  font-size: 40px;
  line-height: 48px;

}

p {
  font-size: 14px;
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
  max-width: 380px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 10px 32px;
  border-radius: 8px;
  background-color: #ffa244;
  cursor: pointer;
  transition: background .25s linear;
}
`

const Box = styled.div`
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

function App() {
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
        <ContentBox>
          <h2><span>Services</span>That We Continue To Improve</h2>
        </ContentBox>
      </MainSection>
      <Section>
        <div>hadfa</div>
      </Section>
    </Container>

  );
}

export default App;
