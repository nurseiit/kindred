import styled from 'styled-components';
import { Layout } from '../components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 25px;
`;

export default function Index() {
  return (
    <Layout selected="settings">
      <Wrapper>Coming soon...</Wrapper>
    </Layout>
  );
}
