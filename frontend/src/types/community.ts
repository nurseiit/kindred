export type ICommunity = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  invite_code: string;
  users: Array<number>;
};
