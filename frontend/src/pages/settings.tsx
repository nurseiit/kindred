import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/auth/authSlice';

import { Layout } from '../components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 25px;
`;

export default function Index() {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push('/login');
  }, [isAuthenticated]);

  return (
    <Layout selected="settings">
      <Wrapper>Coming soon...</Wrapper>
    </Layout>
  );
}
