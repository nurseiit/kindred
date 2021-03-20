import { Loading } from '@geist-ui/react';
import styled from 'styled-components';

import { useUser } from '../../utils';
import { Emoji } from '../emoji';
import { Content } from './content';
import { Top } from './top';

const Wrapper = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  color: var(--accent-2);
`;

const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Feed = () => {
  const { user, isLoading, error } = useUser();
  if (isLoading || (!user && !error)) {
    return <Loading />;
  }
  return (
    <>
      <Top />
      <Wrapper>
        <TitleWrapper>
          <Title>Hello {user?.first_name}</Title>
          <Subtitle>
            Anything you&apos;d like to share with your Kindred?
            <Emoji>☺️</Emoji>
          </Subtitle>
        </TitleWrapper>
        <Content />
      </Wrapper>
    </>
  );
};
