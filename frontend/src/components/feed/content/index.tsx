import styled from 'styled-components';
import { Main } from './main';
import { SideBar } from './sideBar';

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 5fr 3fr;
`;

export const Content = () => (
  <Wrapper>
    <Main />
    <div>
      <SideBar />
    </div>
  </Wrapper>
);
