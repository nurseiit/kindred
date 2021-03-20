import { Spacer } from '@geist-ui/react';
import { Notifications, Search } from '@styled-icons/ionicons-outline';
import styled from 'styled-components';
import { Emoji } from '../emoji';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .icon {
    color: var(--accent-2);
  }
`;

const Border = styled.div`
  width: 0;
  height: 24px;
  border-right: 1px solid var(--accent-1);
`;

const ProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  width: 30px;

  min-height: 35px;
  min-width: 35px;
  background-color: var(--success-0);
  border-radius: 50%;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px;
`;

export const Top = () => (
  <Wrapper>
    <Emoji isRoundedWhiteBg withShadow>
      <Search className="icon" width={20} height={20} />
    </Emoji>
    <Spacer x={0.8} />
    <Emoji isRoundedWhiteBg withShadow>
      <Notifications className="icon" width={20} height={20} />
    </Emoji>
    <Spacer x={0.8} />
    <Border />
    <Spacer x={0.8} />
    <ProfilePhoto>🦸🏻‍♀️</ProfilePhoto>
  </Wrapper>
);
