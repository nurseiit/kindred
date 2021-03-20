import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/auth/authSlice';

import { Feed, Layout } from '../components';

export default function Index() {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push('/login');
  }, [isAuthenticated]);

  return (
    <Layout>
      <Feed />
    </Layout>
  );
}
