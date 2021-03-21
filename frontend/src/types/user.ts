import { IPost, IGroup, ICommunity } from '.';

export type IUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
  groups: Array<IGroup>;
  posts: Array<IPost>;
  communities: Array<ICommunity>;
};
