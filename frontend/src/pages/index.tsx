import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/auth/authSlice';

export default function Index() {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push('/login');
  }, [isAuthenticated]);

  return <div>hello</div>;
}
