import React from "react";
import styled from "styled-components";

import Navbar from "../Components/Navbar.jsx"
import background from "../images/bg6.svg";
import Accordion from "../Components/Accordion.jsx";
import Footer from "../Components/Footer.jsx";

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
padding: 20px;
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
`

const Box = styled.div`
@media (min-width: 980px) {
  text-align: left;
}
`

const LastSection = styled.div`
border-top: 2px solid rgba(255,255,255,.07);
background-color: rgba(255,255,255,.07);
padding: 30px 30px;
`

const Faq = () => {
    return (
        <Container>
            <MainSection>
                <Navbar />
                <Box>
                    <MainInfo>
                        <h1>FAQ</h1>
                        <p>Here we have tried to answer frequently asked questionsk please read before contacting support.</p>
                    </MainInfo>
                </Box>
            </MainSection>
            <Section>
                <Box>
                    <Accordion title="1. How to start mining with AtomicHashes?">
                        First of all, familiarize yourself with the terms of use of our company, go through a simple registration and familiarize yourself with the current packages.
                    </Accordion>
                    <Accordion title="2. How can I purchase a package?">
                        You need to select the package that interests you and follow the instructions on the site, to pay for the packages you will need any virtual wallet. Pay to the wallet address that is indicated on the package you selected.
                    </Accordion>
                    <Accordion title="3. How to withdraw earned profit?">
                        Going to the Payout section, enter your wallet address and the amount you would like to withdraw. The amount should not exceed your account balance, also be careful, your wallet address must have been valid, otherwise the withdrawal will be blocked.
                    </Accordion>
                    <Accordion title="4. How to use the Referral Program?">
                        You can find information about the referral program on our website. Invite a friend, purchase packages together and get your bonus.
                    </Accordion>
                    <Accordion title="5. Is there a minimum or maximum purchase amount?">
                        You can familiarize yourself with the cost of our packages in the Packages tab, the price ranges from $100 to $18,000.
                    </Accordion>
                </Box>
            </Section>
            <LastSection>
                <Footer />
            </LastSection>

        </Container>
    )
}

export default Faq;