import styled from 'styled-components';
import { Emoji } from '../emoji';
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

  margin-bottom: 20px;
`;

export const Feed = () => (
  <>
    <Top />
    <Wrapper>
      <div>
        <Title>Hello Daniel</Title>
        <Subtitle>
          Anything you&apos;d like to share with your Kindred?
          <Emoji>☺️</Emoji>
        </Subtitle>
      </div>
    </Wrapper>
  </>
);
