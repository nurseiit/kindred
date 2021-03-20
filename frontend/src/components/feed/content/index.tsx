import styled from 'styled-components';
import { Main } from './main';

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 5fr 3fr;
`;

const SideBar = styled.div`
  min-height: 100px;
  background-color: white;
`;

export const Content = () => (
  <Wrapper>
    <Main />
    <SideBar />
  </Wrapper>
);
