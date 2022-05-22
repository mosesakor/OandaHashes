import React from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import AdminUser from '../Components/AdminUser';

const Container = styled.div`
  color: #fff;
  overflow: hidden;
  padding-bottom: 0;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SplitView = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  max-height: 100%;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  background-color: #1a2a2a;
  border-radius: 0 8px 8px 0;

  h1 {
    margin: 0.5rem 0;
  }

  a {
    color: whitesmoke;
  }

  .option {
    display: flex;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: black;

    &.active {
      background-color: #2a4545;
      color: whitesmoke;
    }
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 1rem;
  overflow-x: hidden;
  overflow-y: auto;

  .list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

type State = {
  users: {
    id: string;
    username: string;
    email: string;
  }[];
};

export default class Admin extends React.PureComponent<{}, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      users: [],
    };
    this.update = this.update.bind(this);
  }

  async update() {
    const token = new Cookies().get('token');

    const resp = await fetch(`http://localhost:8080/api/users`, {
      headers: {
        Authorization: token,
      },
    });
    const data: {
      type: number;
      name?: string;
      message?: string;
      users?: { id: string; username: string; email: string }[];
    } = await resp.json();

    if (data.type === 0) {
      const users = data.users!;
      this.setState({ users: users });
    } else {
      alert(`Error, ${data.type}, ${data.name}, ${data.message}`);
    }
  }

  async componentDidMount() {
    this.update();
  }

  render() {
    return (
      <Container>
        <SplitView>
          <Sidebar>
            <h1>Admin</h1>
            <a href="/">← Back</a>
            <h3 className="option active">User Management</h3>
          </Sidebar>
          <MainSection>
            <h2>User Management</h2>
            <div className="list">
              {this.state.users.map((v) => (
                <AdminUser id={v.id} update={this.update} key={v.id} />
              ))}
            </div>
          </MainSection>
        </SplitView>
      </Container>
    );
  }
}
