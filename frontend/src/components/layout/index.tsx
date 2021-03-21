import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './header';

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  flex-grow: 1;
  min-height: calc(100vh - 40px);
  background-color: var(--bg-1);
  padding: 20px 20px;
`;

export const Layout: FC<{ selected: string }> = ({ children, selected }) => {
  return (
    <Wrapper>
      <Header selected={selected} />
      <MainWrapper>{children}</MainWrapper>
    </Wrapper>
  );
};
