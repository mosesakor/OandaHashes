import Profit from './Profit';

export default interface UserBase {
  id: string;
  username: string;
  email: string;
  isStaff: boolean;
  balance: number;
  profit: Profit;
}
