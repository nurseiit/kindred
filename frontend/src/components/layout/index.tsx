import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './header';

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  flex-grow: 1;
  background: rgba(242, 247, 255, 0.8);
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
