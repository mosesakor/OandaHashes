import React from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import AdminUser from '../Components/AdminUser';

const Container = styled.div`
  overflow: hidden;
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

  h1 {
    margin: 0.5rem 0;
    color: var(--heading);
  }

  a {
    color: var(--text);

    &:hover {
      color: var(--heading);
    }
  }

  .option {
    display: flex;
    margin: 1rem 0;

    &.active {
      color: var(--link-active);
    }
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--background-secondary);
  border-radius: 8px 0 0 8px;
  border: 1px solid var(--border);

  h1 {
    color: var(--heading);
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;

    @media (min-width: 648px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 980px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    c @media (min-width: 1280px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    flex-direction: column;
    margin-top: 1rem;
  }
`;

type State = {
  users: string[];
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
      users?: string[];
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
            <h1>User Management</h1>
            <div className="list">
              {this.state.users.map((v) => (
                <AdminUser id={v} update={this.update} key={v} />
              ))}
            </div>
          </MainSection>
        </SplitView>
      </Container>
    );
  }
}
