import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Input, useToasts } from '@geist-ui/react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { requestRegister, selectAuth } from '../features/auth/authSlice';

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
    registerRequest: { isLoading, error },
  } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [, setToast] = useToasts();

  useEffect(() => {
    if (isAuthenticated) router.push('/');
  }, [isAuthenticated]);

  const onSuccess = () => {
    setToast({
      type: 'success',
      text: 'Signed up! Please login now.',
      delay: 3000,
    });
    router.push('/login');
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '5fr 4fr',
        textAlign: 'justify',
      }}
    >
      <div style={{ backgroundColor: 'var(--bg-1)' }}></div>
      <Wrapper>
        <Title>
          All of your kindred <em style={{ fontWeight: 300 }}>/ˈkindrid/</em>{' '}
          are here!
        </Title>
        <Desc>[noun] one&apos;s family and relations.</Desc>
        Access to Kindred is by invitation only. Sign up below to join our
        waitlist. If you have an invitation code, you can enter in the next
        step.
        <InnerWrapper>
          <Input
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          ></Input>
          <Input
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          ></Input>
          <Input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          ></Input>
          <Input.Password
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          ></Input.Password>
          <Button
            className="button"
            loading={isLoading}
            auto
            type="secondary"
            size="small"
            onClick={() =>
              dispatch(
                requestRegister({
                  registerData: {
                    email,
                    password,
                    first_name: firstName,
                    last_name: lastName,
                  },
                  cb: onSuccess,
                })
              )
            }
          >
            sign up
          </Button>
        </InnerWrapper>
        {error && <span style={{ color: 'red' }}>{JSON.stringify(error)}</span>}
        <Link href="/login">
          <Desc as="a" href="/login" style={{ marginTop: 70, fontSize: 14 }}>
            Already have an account?
          </Desc>
        </Link>
      </Wrapper>
    </div>
  );
}
