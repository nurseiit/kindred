import { useRouter } from 'next/router';
import useSwr from 'swr';

import { IUser } from '../../types';
import { fetcher } from '../../utils';

export default function User() {
  const router = useRouter();
  const { data, error } = useSwr<IUser>(
    router.query.id ? `/api/user/${router.query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{data.name}</div>;
}
