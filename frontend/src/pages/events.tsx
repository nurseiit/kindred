import { Layout } from '../components';
import { SideBar } from '../components/feed/content/sideBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > div {
    width: 40%;
  }
`;

export default function Index() {
  return (
    <Layout selected="events">
      <Wrapper>
        <SideBar />
      </Wrapper>
    </Layout>
  );
}
