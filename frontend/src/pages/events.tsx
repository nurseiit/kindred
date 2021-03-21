import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/auth/authSlice';

import { Layout } from '../components';
import { SideBar } from '../components/feed/content/sideBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > div {
    width: 40%;
  }
`;

export default function Index() {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push('/login');
  }, [isAuthenticated]);

  return (
    <Layout selected="events">
      <Wrapper>
        <SideBar />
      </Wrapper>
    </Layout>
  );
}
