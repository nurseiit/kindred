import { NextApiRequest, NextApiResponse } from 'next';
import { IUser } from '../../types';

// fake users data
const users: IUser[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Tony' },
  { id: 3, name: 'Wanda' },
];

export default (_: NextApiRequest, res: NextApiResponse) => {
  // get data from your database
  res.status(200).json(users);
};
