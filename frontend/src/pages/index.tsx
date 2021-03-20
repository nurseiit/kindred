import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/auth/authSlice';
import { decrement, increment } from '../features/counter/counterSlice';

const Span = styled.span`
  color: violet;
`;

export default function Index() {
  const count = useAppSelector((state) => state.counter.value);
  const { isAuthenticated } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>{isAuthenticated ? 'Helloo!' : 'please login'}</h1>
      <Span>{count}</Span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
