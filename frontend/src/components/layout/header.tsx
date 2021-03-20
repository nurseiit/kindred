import { FC } from 'react';
import styled from 'styled-components';

import { Home, Star, UnfoldMore } from '@styled-icons/material-rounded';

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

  color: ${({ selected }) => (selected ? '#0e6df5' : '#d4d4d4')};

  margin-bottom: 20px;

  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.span`
  margin-right: 25px;
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
  { text: 'Favourites', icon: Star },
];

const NavLinks: FC = () => (
  <div>
    {AllLinks.map(({ text, selected, icon: LinkIcon }, idx) => (
      <NavLink selected={selected} key={`${text}-${idx}`}>
        <IconWrapper>
          <LinkIcon height={30} width={30} />
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

const RoundedWhite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  height: 35px;
  width: 35px;
  background-color: white;
  border-radius: 50%;
`;

const GroupTitleWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-size: 12px;
`;

const GroupTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

export const Header: FC = () => (
  <OptionsWrapper>
    <LogoWrapper>
      <Logo /> Kindred
    </LogoWrapper>
    <GroupsWrapper>
      <RoundedWhite>😍</RoundedWhite>
      <GroupTitleWrapper>
        <GroupTitle>Almanov Family</GroupTitle>
        this kindred
      </GroupTitleWrapper>
      <UnfoldMore className="icon" height={22} width={22} />
    </GroupsWrapper>
    <NavLinks />
  </OptionsWrapper>
);
