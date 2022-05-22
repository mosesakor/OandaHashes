import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// import background from '../images/eqp3.svg';
import background2 from '../images/bg-form.svg';
import Button from '../Components/Button';
import Input from '../Components/Input';
// import bg4 from '../images/bg4.svg';

const background = '';
const bg4 = '';

const Container = styled.div`
  color: #fff;
  overflow: hidden;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const MainSection = styled.div`
  background-image: url(${bg4});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 15px 30px;
  background-attachment: fixed;
`;

const Section = styled.div`
  margin-bottom: 50px;
  padding: 10px;
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

const LastSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid var(--border-full);
  border-radius: 8px 8px 0 0;
  padding: 2rem 1rem 2rem;
`;

const Items = styled.div`
  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: auto auto;
    padding: 50px;
    text-align: center;
  }
`;

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
    list-style-type: '🔥 ';
    @media (min-width: 980px) {
      padding: 10px;
      display: inline-block;
      *display: inline;
      zoom: 1;
    }
  }

  ul li {
    text-align: left;
    padding: 10px;
    color: #5b5b5f;
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
    color: #6e6e74;
  }

  @media (max-width: 980px) {
    img {
      height: 150px;
      width: 150px;
      text-align: center;
      margin-top: -15%;
    }
  }
`;

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

  @media (max-width: 980px) {
    width: fit-content;
  }

  p {
    color: #58585c;
  }
`;

const List = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media (min-width: 980px) {
    .list {
      padding: 10px;
      width: 50%;
      margin-left: 10%;
    }
  }

  @media (max-width: 980px) {
    .list {
      padding: 10px;
      width: 100%;
      margin-left: 10%;
    }
  }
`;

export default class Equipment extends React.PureComponent {
  render() {
    return (
      <Container>
        <MainSection>
          <Navbar />
          <Box>
            <MainInfo>
              <h1>Mining Equipment</h1>
              <p>
                AtomicHashes provides an all-in-one staking solution. Let us do
                the work, while you earn the rewards.
              </p>
            </MainInfo>
          </Box>
        </MainSection>
        <Section>
          <Items>
            <Item>
              <img
                src={
                  'https://media.discordapp.net/attachments/775447356702851113/969254454010470440/eqp1.png?width=645&height=616'
                }
                alt="Loading"
              />
              <h2>Asic Whatsminer M20S 70TH/s</h2>
              <p>
                MicroBT has released ASIC Whatsminer M20s 70 TH / s for Bitcoin
                mining on the SHA-256 algorithm.
                <br />
                <br />
                ASIC Whatsminer M20s 70 TH / s is made of high quality aluminum,
                so the structure of the device is reliably protected from
                mechanical damage. On the sides there are special coolers in the
                amount of 2 pieces, which provide effective cooling, protecting
                the ASIC from overheating.
              </p>
              <br />
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
              <img
                src={
                  'https://media.discordapp.net/attachments/775447356702851113/969254454471827497/eqp2.png?width=498&height=616'
                }
                alt="Loading"
              />
              <h2>Miner ASIC Antminer S15</h2>
              <p>
                The antminer S9 with 16nm chips, which held the lead for almost
                two years, was replaced by a new model - the asic Bitmain
                Antminer S15.
                <br />
                <br />
                Power consumption is comparatively economical, and the case uses
                a lightweight but durable aluminum alloy to help speed up
                cooling.
              </p>
              <br />
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
            <div className="list">
              <ListItem>
                <h2>Consistency</h2>
                <p>
                  The company has taken care of the systematization of the
                  functions for activating packages and payments.
                </p>
              </ListItem>
              <ListItem>
                <h2>Regularity</h2>
                <p>
                  Regularity and automation of payments are provided for quick
                  profit without problems.
                </p>
              </ListItem>
              <ListItem>
                <h2>Reliability</h2>
                <p>
                  The company is responsible for the security of this server and
                  provides mining, which ensures a greater degree of
                  confidentiality.
                </p>
              </ListItem>
              <ListItem>
                <h2>Innovation</h2>
                <p>
                  We have managed to open access to eco-mining for everyone.
                </p>
              </ListItem>
              <ListItem>
                <h2>Functionality</h2>
                <p>
                  Thanks to the functionality of the server, buying, withdrawing
                  and tracking your balance are not difficult for our clients.
                </p>
              </ListItem>
              <ListItem>
                <h2>Individuality</h2>
                <p>
                  Our support team tries to individually approach each client,
                  taking into account your wishes, we try to implement this as
                  soon as possible for further use.
                </p>
              </ListItem>
            </div>
          </List>
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
                <Button>Get Started</Button>
              </MainInfoForm>
            </Form>
          </FastStart>
        </Section>
        <LastSection>
          <Footer />
        </LastSection>
      </Container>
    );
  }
}
