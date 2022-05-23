import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import background from '../images/atom_background.svg';
import Footer from '../Components/Footer';
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

const FormAgree = styled.div`
  margin-bottom: 24px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  a {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.25s linear;
    text-decoration: underline;
    outline: 0;

    &:hover {
      color: #ffa244;
      text-decoration: none;
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

type RegistrationState = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default class Registration extends React.PureComponent<
  {},
  RegistrationState
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  async onClick(e: React.MouseEvent) {
    e.preventDefault();
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const passwordConfirm = this.state.passwordConfirm;

    if (!username || !email || !password || !passwordConfirm) {
      alert('Please fill in all fields');
      return;
    }
    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }
    const resp = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data: { type: number; id?: string; name?: string; message?: string } =
      await resp.json();
    if (data.type === 0) {
      alert(`Registration successful, User ID: ${data.id}`);
    } else {
      alert(`Registration failed, ${data.type}, ${data.name}, ${data.message}`);
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
                <a className="active" href="/register">
                  Registration
                </a>
                <a href="/login">Login</a>
              </FormPage>
              <FormContent>
                <FormField>
                  <label>Username</label>
                  <Input
                    type="username"
                    name="username"
                    required
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                </FormField>
                <FormField>
                  <label>Email</label>
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
                <FormField>
                  <label>Confirm your password</label>
                  <Input
                    type="password"
                    name="password_confirm"
                    required
                    onChange={(e) =>
                      this.setState({ passwordConfirm: e.target.value })
                    }
                  />
                </FormField>
                <FormLink>
                  <a href="/login">Already have an account?</a>
                </FormLink>
                <FormAgree>
                  By clicking "Create an account" you agree to our{' '}
                  <a href="/terms">terms</a> and conditions and{' '}
                  <a href="/privacy">privacy policy</a>
                </FormAgree>
                <Button onClick={this.onClick}>
                  <span>Create an account</span>
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
