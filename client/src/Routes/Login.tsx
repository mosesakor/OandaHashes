import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import background from '../images/atom_background.svg';
import Footer from '../Components/Footer';

const Container = styled.div`
  color: #fff;
  overflow: hidden;
  padding-bottom: 0;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainSection = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 15px 30px;
  background-attachment: fixed;
  flex-grow: 1;
`;

const FormContainer = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  max-width: 1280px;
  min-height: 460px;
  margin: 50px auto;
  position: relative;

  flex: 0 1 50%;

  form {
    background-color: rgba(26, 49, 28, 0.6);
    border-radius: 8px;
    flex: 0 1 50%;
    display: block;
    max-width: 520px;
    padding: 32px;
  }
`;

const FormContent = styled.div`
  max-width: 520px;

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
`;

const FormField = styled.div`
  margin-bottom: 24px;

  label {
    display: block;
    margin-bottom: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 64px;
    padding: 18px 24px;
    background #fff;
    border-radius: 8px;
    border: 0 solid #fff;
    color: #010001;
    font-size: 14px;
    font-weight: 600;
  }
`;

const FormLink = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;

  a {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.25s linear;
    text-decoration: none;
    outline: 0;

    &:hover {
      color: #ffa244;
    }
  }
`;

const LastSection = styled.div`
  border-top: 2px solid rgba(255, 255, 255, 0.07);
  background-color: rgba(255, 255, 255, 0.07);
  padding: 30px 30px;
`;

const FormPage = styled.div`
  display: flex;
  margin-bottom: 32px;

  a {
    display: inline-flex;
    min-height: 56px;
    padding: 18px 32px;
    border-radius: 8px;
    border: 2px solid transparent;
    color: #6e6e74;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    outline: 0;

    &.active {
      color: #ffa244;
      border: 2px solid #ffa244;
    }
  }
`;

type LoginState = {
  email: string;
  password: string;
};

export default class Login extends React.PureComponent<{}, LoginState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  async onClick(e: React.MouseEvent) {

  }

  render() {
    return (
      <Container>
        <MainSection>
          <Navbar />
          <FormContainer>
            <form>
              <FormPage>
                <a href="/register">Registration</a>
                <a className="active" href="/login">
                  Login
                </a>
              </FormPage>
              <FormContent>
                <FormField>
                  <label>Email/Username</label>
                  <input type="email" name="email" required />
                </FormField>
                <FormField>
                  <label>Password</label>
                  <input type="password" name="password" required />
                </FormField>
                <FormLink>
                  <a href="/forgot-password">Forgot your password?</a>
                </FormLink>
                <button onClick={this.onClick}>
                  <span>Login</span>
                </button>
              </FormContent>
            </form>
          </FormContainer>
        </MainSection>
        <LastSection>
          <Footer />
        </LastSection>
      </Container>
    );
  }
}
