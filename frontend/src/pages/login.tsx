import { Button } from '@geist-ui/react';
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
          <Button onClick={() => dispatch(login('random-token'))}>login</Button>
        </>
      )}
      {isAuthenticated && (
        <Button onClick={() => dispatch(logout())}>logout</Button>
      )}
    </div>
  );
}
