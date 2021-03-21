import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Input } from '@geist-ui/react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { requestLogin, selectAuth } from '../features/auth/authSlice';

const Wrapper = styled.div`
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 75px;

  .input {
    min-width: 300px;
    margin-bottom: 12px;
  }

  .button {
    border-radius: 12px !important;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  margin-top: 60px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 400;
  width: 330px;

  margin-bottom: 10px;
`;

const Desc = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  width: 300px;

  margin-bottom: 30px;
`;

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
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '5fr 4fr',
        textAlign: 'justify',
      }}
    >
      <div
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundPosition: 'center',
        }}
      ></div>
      <Wrapper>
        <Title>
          All of your kindred <em style={{ fontWeight: 300 }}>/ˈkindrid/</em>{' '}
          are here!
        </Title>
        <Desc>[noun] one&apos;s family and relations.</Desc>

        <InnerWrapper>
          <Input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          >
            Email address
          </Input>
          <Input.Password
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          >
            Password
          </Input.Password>
          <Button
            className="button"
            loading={isLoading}
            auto
            type="secondary"
            size="small"
            onClick={() => dispatch(requestLogin({ email, password }))}
          >
            login
          </Button>
        </InnerWrapper>
        <Link href="/signup">
          <Desc as="a" href="/signup" style={{ marginTop: 70, fontSize: 14 }}>
            Do not have an account?
          </Desc>
        </Link>
      </Wrapper>
    </div>
  );
}
