import { FC } from 'react';
import styled from 'styled-components';

import {
  Calendar,
  Home,
  Image,
  Settings,
} from '@styled-icons/ionicons-outline';
import { UnfoldMore } from '@styled-icons/material-rounded';
import { Emoji } from '../emoji';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/user/userSlice';
import { Loading } from '@geist-ui/react';

const OptionsWrapper = styled.header`
  position: sticky;
  top: 0;

  width: 220px;
  padding: 24px 18px;

  height: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 18px;

  margin-bottom: 40px;
`;

const Logo = styled.div`
  width: 35px;
  height: 35px;

  margin-right: 18px;

  background: linear-gradient(
      180deg,
      #88b8ff 0%,
      rgba(0, 103, 255, 0.67) 78.65%
    ),
    #3784f5;
  border-radius: 8px;
`;

interface NavLinkProps {
  selected?: boolean;
}

const NavLink = styled.a<NavLinkProps>`
  display: flex;
  align-items: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;

  color: ${({ selected }) =>
    selected ? 'var(--accent-8)' : 'var(--accent-1)'};

  .icon {
    color: ${({ selected }) =>
      selected ? 'var(--success-1)' : 'var(--accent-5)'};
  }

  width: calc(100% + 17px);
  height: 35px;
  border-right: ${({ selected }) =>
    selected ? '2px solid var(--success-2)' : 'none'};

  margin-bottom: 15px;

  cursor: pointer;

  &:hover {
    color: ${({ selected }) =>
      selected ? 'var(--accent-8)' : 'var(--accent-5)'};

    .icon {
      color: ${({ selected }) =>
        selected ? 'var(--success-1)' : 'var(--accent-7)'};
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.span`
  margin: 0 14px;
  display: flex;
  align-items: center;
`;

type LinkType = {
  text: string;
  selected?: boolean;
  icon: typeof Home;
};

const AllLinks: LinkType[] = [
  { text: 'Feed', selected: true, icon: Home },
  { text: 'Events', icon: Calendar },
  { text: 'Photo Gallery', icon: Image },
  { text: 'Settings', icon: Settings },
];

const NavLinks: FC = () => (
  <div>
    {AllLinks.map(({ text, selected, icon: LinkIcon }, idx) => (
      <NavLink selected={selected} key={`${text}-${idx}`}>
        <IconWrapper>
          <LinkIcon className="icon" height={22} width={22} />
        </IconWrapper>
        {text}
      </NavLink>
    ))}
  </div>
);

const GroupsWrapper = styled.button`
  position: relative;

  display: flex;
  align-items: center;

  width: calc(100% - 2 * 14px);
  padding: 14px;

  border: none;
  border-radius: 10px;
  outline: none;

  background-color: var(--bg-1);

  cursor: pointer;

  margin-bottom: 30px;

  transition: all 0.2s ease 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 8px;
  }

  .icon {
    position: absolute;
    right: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const GroupTitleWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-size: 12px;
`;

const GroupTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

export const Header: FC = () => {
  const { currentCommunity } = useAppSelector(selectUser);
  return (
    <OptionsWrapper>
      <LogoWrapper>
        <Logo /> Kindred
      </LogoWrapper>
      <GroupsWrapper>
        <Emoji isRoundedWhiteBg>😍</Emoji>
        <GroupTitleWrapper>
          <GroupTitle>{currentCommunity?.name || <Loading />}</GroupTitle>
          this kindred
        </GroupTitleWrapper>
        <UnfoldMore className="icon" height={22} width={22} />
      </GroupsWrapper>
      <NavLinks />
    </OptionsWrapper>
  );
};
