import { Popover, Spacer, Link, Badge } from '@geist-ui/react';
import { Notifications, Search } from '@styled-icons/ionicons-outline';
import styled from 'styled-components';

import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';
import { useUser } from '../../utils';
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

export const ProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.2s ease 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 7px;
  }

  font-size: 22px;
  width: 30px;

  min-height: 35px;
  min-width: 35px;
  background-color: var(--success-0);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px;
`;

const PopoverWrapper = styled.div`
  width: 200px;
`;

export const Top = () => {
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const content = (
    <PopoverWrapper>
      <Popover.Item title>
        <span>{[user?.first_name, user?.last_name].join(' ')}</span>
      </Popover.Item>
      <Popover.Item>
        <Link href="#">Profile</Link>
      </Popover.Item>
      <Popover.Item>
        <Link href="#">My posts</Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
        <span style={{ cursor: 'pointer' }} onClick={() => dispatch(logout())}>
          Log out
        </span>
      </Popover.Item>
    </PopoverWrapper>
  );

  const notificationContent = () => (
    <PopoverWrapper>
      <Popover.Item title>
        <span>Welcome to Kindred, {user?.first_name}!</span>
      </Popover.Item>
    </PopoverWrapper>
  );

  return (
    <Wrapper>
      <Emoji isRoundedWhiteBg withShadow>
        <Search className="icon" width={20} height={20} />
      </Emoji>
      <Spacer x={0.8} />
      <Popover
        content={notificationContent}
        placement="bottomEnd"
        style={{ cursor: 'pointer' }}
      >
        <Emoji isRoundedWhiteBg withShadow>
          <Badge.Anchor>
            <Badge size="large" type="error" dot />
            <Notifications className="icon" width={20} height={20} />
          </Badge.Anchor>
        </Emoji>
      </Popover>
      <Spacer x={0.8} />
      <Border />
      <Spacer x={0.8} />
      <Popover content={content} placement="bottomEnd">
        <ProfilePhoto>🦸🏻‍♀️</ProfilePhoto>
      </Popover>
    </Wrapper>
  );
};
