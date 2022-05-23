export default interface User {
  id: string;
  username: string;
  email: string;
  isStaff: boolean;
  balance: number;
  profit: {
    total: number;
    daily: number;
  };
}
