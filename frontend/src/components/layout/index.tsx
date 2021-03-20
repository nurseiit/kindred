import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './header';

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  flex-grow: 1;
  background-color: var(--bg-1);
  padding: 20px 20px;
`;

export const Layout: FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </Wrapper>
  );
};
