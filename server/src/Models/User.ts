import UserBase from './UserBase';

export default interface User extends UserBase {
  password: string;
}
