import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import background from '../images/atom_background.svg';
import Footer from '../Components/Footer';
import Cookies from 'universal-cookie';
import Input from '../Components/Input';
import Button from '../Components/Button';

const Container = styled.div`
  overflow: hidden;
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
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  justify-self: center;
  flex-grow: 1;

  form {
    background-color: var(--background-secondary);
    border-radius: 8px;
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

const FormContent = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 10px;
    color: #fff;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid var(--border-full);
  border-radius: 8px 8px 0 0;
  padding: 2rem 1rem 2rem;
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
    this.onClick = this.onClick.bind(this);
  }

  async onClick(e: React.MouseEvent) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    const resp = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data: {
      type: number;
      token?: string;
      name?: string;
      message?: string;
    } = await resp.json();
    if (data.type === 0) {
      alert(`Login successful`);
      const cookies = new Cookies();
      cookies.set('token', data.token, {
        secure: !window.location.origin.includes('localhost'),
        sameSite: true,
      });
    } else {
      alert(`Login failed, ${data.type}, ${data.name}, ${data.message}`);
    }
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
                  <Input
                    type="email"
                    name="email"
                    required
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </FormField>
                <FormField>
                  <label>Password</label>
                  <Input
                    type="password"
                    name="password"
                    required
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </FormField>
                <FormLink>
                  <a href="/forgot-password">Forgot your password?</a>
                </FormLink>
                <Button onClick={this.onClick}>
                  <span>Login</span>
                </Button>
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
