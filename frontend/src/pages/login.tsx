import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Input } from '@geist-ui/react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { requestLogin, selectAuth } from '../features/auth/authSlice';

export default function Login() {
  const router = useRouter();
  const {
    isAuthenticated,
    loginRequest: { isLoading },
  } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) router.push('/');
  }, [isAuthenticated]);

  return (
    <div>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter username"
      />
      <Input.Password
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <Button
        loading={isLoading}
        auto
        type="success"
        size="small"
        onClick={() => dispatch(requestLogin({ email, password }))}
      >
        login
      </Button>
    </div>
  );
}
