import React from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import Button from './Button';

const User = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: var(--background-tertiary);
  border: 1px solid rgba(84, 84, 84, 0.65);
  border-radius: 8px;

  h3 {
    margin: 0;
  }

  h4 {
    margin: 0;
    color: darkgray;

    text-align: right;

    &.last {
      margin-bottom: 1rem;
    }

    span {
        color: var(--heading)
    }
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  gap: 0.5rem;
  align-self: center;
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
        <h4>ID: <span>{this.state.info.id}</span></h4>
        <h4>Email: <span>{this.state.info.email}</span></h4>
        <h4 className="last">Balance: <span>{this.state.info.balance}</span></h4>
        <Options>
          <Button onClick={this.delete}>Delete</Button>
          <Button onClick={this.editBalance}>Edit Balance</Button>
        </Options>
      </User>
    );
  }
}
