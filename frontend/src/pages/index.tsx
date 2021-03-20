import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrement, increment } from '../features/counter/counterSlice';

const Span = styled.span`
  color: violet;
`;

export default function Index() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Span>{count}</Span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
