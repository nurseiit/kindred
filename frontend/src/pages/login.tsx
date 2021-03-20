import { useAppDispatch, useAppSelector } from '../app/hooks';
import { login, logout, selectAuth } from '../features/auth/authSlice';

export default function Login() {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  return (
    <div>
      {!isAuthenticated && (
        <>
          <h1>hello!</h1>
          <button onClick={() => dispatch(login('random-token'))}>login</button>
        </>
      )}
      {isAuthenticated && (
        <button onClick={() => dispatch(logout())}>logout</button>
      )}
    </div>
  );
}
