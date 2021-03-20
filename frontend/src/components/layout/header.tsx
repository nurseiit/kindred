import { FC } from 'react';
import styled from 'styled-components';

import { Home, Star } from '@styled-icons/material-rounded';

const OptionsWrapper = styled.header`
  position: sticky;
  top: 0;

  width: 200px;
  padding-top: 24px;
  padding-left: 18px;

  height: 100%;
`;

const Logo = styled.div`
  width: 24px;
  height: 24px;

  background: linear-gradient(
      180deg,
      #88b8ff 0%,
      rgba(0, 103, 255, 0.67) 78.65%
    ),
    #3784f5;
  border-radius: 6px;

  margin-bottom: 35px;
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

  margin-bottom: 25px;

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
          <LinkIcon height={20} width={20} />
        </IconWrapper>
        {text}
      </NavLink>
    ))}
  </div>
);

export const Header: FC = () => (
  <OptionsWrapper>
    <Logo />
    <NavLinks />
  </OptionsWrapper>
);
