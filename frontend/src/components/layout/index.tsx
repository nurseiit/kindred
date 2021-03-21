import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useAppSelector } from '../../app/hooks';
import { selectAuth } from '../../features/auth/authSlice';
import { Header } from './header';
import { Loading } from '@geist-ui/react';

const Wrapper = styled.div<{ rendered: boolean }>`
  display: ${({ rendered }) => (rendered ? 'flex' : 'none')};
`;

const MainWrapper = styled.div`
  flex-grow: 1;
  min-height: calc(100vh - 40px);
  background-color: var(--bg-1);
  padding: 20px 20px;
`;

export const Layout: FC<{ selected: string }> = ({ children, selected }) => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const router = useRouter();
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) router.push('/signup');
    else setRendered(true);
  }, [isAuthenticated]);

  return (
    <>
      {!rendered && <Loading size="large" />}
      <Wrapper rendered={rendered}>
        <Header selected={selected} />
        <MainWrapper>{children}</MainWrapper>
      </Wrapper>
    </>
  );
};
