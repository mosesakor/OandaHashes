import React from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

const User = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0;
  background-color: #1a2a2a;
  border-radius: 8px;

  h3 {
    margin: 0;
  }

  h4 {
    margin: 0;
    color: darkgray;
    &.last {
      margin-bottom: 0.5rem;
    }
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  gap: 0.5rem;

  button {
    padding: 0.5rem;
    margin: 0;
    color: whitesmoke;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    background-color: #2a4545;
    cursor: pointer;
  }
`;

type Props = {
  id: string;
  update: () => Promise<void>;
};

type State = {
  info: {
    id: string;
    username: string;
    email: string;
    balance: number;
  };
};

export default class AdminUser extends React.PureComponent<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);

    this.state = {
      info: {
        id: '',
        username: '',
        email: '',
        balance: 0,
      },
    };

    this.delete = this.delete.bind(this);
    this.editBalance = this.editBalance.bind(this);
    this.update = this.update.bind(this);
  }

  async update() {
    const token = new Cookies().get('token');

    const resp = await fetch(
      `http://localhost:8080/api/users/${this.props.id}`,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    const data: {
      type: number;
      name?: string;
      message?: string;
      user?: { id: string; username: string; email: string; balance: number };
    } = await resp.json();

    if (data.type === 0) {
      const user = data.user!;
      this.setState({ info: user });
    } else {
      alert(`Error, ${data.type}, ${data.name}, ${data.message}`);
    }
  }

  async componentDidMount() {
    await this.update();
  }

  async delete(e: React.MouseEvent) {
    const token = new Cookies().get('token');

    const resp = await fetch(
      `http://localhost:8080/api/users/${this.props.id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      },
    );
    const data: {
      type: number;
      name?: string;
      message?: string;
    } = await resp.json();

    if (data.type === 0) this.props.update();
    else alert(`Error, ${data.type}, ${data.name}, ${data.message}`);
  }

  async editBalance(e: React.MouseEvent) {
    const token = new Cookies().get('token');

    const balance = Number(
      prompt('Enter new balance', this.state.info.balance.toString()),
    );

    if (isNaN(balance)) {
      alert('Invalid input');
      return;
    }

    const resp = await fetch(
      `http://localhost:8080/api/users/${this.props.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ balance: balance }),
      },
    );
    const data: {
      type: number;
      name?: string;
      message?: string;
    } = await resp.json();

    if (data.type === 0) {
      await this.update();
      await this.props.update();
    } else alert(`Error, ${data.type}, ${data.name}, ${data.message}`);
  }

  render() {
    return (
      <User>
        <h3>{this.state.info.username}</h3>
        <h4>ID: {this.state.info.id}</h4>
        <h4>Email: {this.state.info.email}</h4>
        <h4 className="last">Balance: {this.state.info.balance}</h4>
        <Options>
          <button onClick={this.delete}>Delete</button>
          <button onClick={this.editBalance}>Edit Balance</button>
        </Options>
      </User>
    );
  }
}
