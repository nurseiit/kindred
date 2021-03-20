import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrement, increment } from '../features/counter/counterSlice';

export default function Index() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
