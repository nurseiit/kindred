import { useEffect } from 'react';
import { useRouter } from 'next/router';
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
  return (
    <Layout selected="gallery">
      <Wrapper>Coming soon...</Wrapper>
    </Layout>
  );
}
