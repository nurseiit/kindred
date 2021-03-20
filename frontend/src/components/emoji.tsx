import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  isRoundedWhiteBg?: boolean;
  withShadow?: boolean;
}

const Wrapper = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  width: 24px;

  ${({ isRoundedWhiteBg }) =>
    isRoundedWhiteBg &&
    `
    min-height: 35px;
    min-width: 35px;
    background-color: white;
    border-radius: 50%;
  `}

  ${({ withShadow }) =>
    withShadow &&
    `
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px;
  `}
`;

export const Emoji: FC<Props> = ({
  children,
  isRoundedWhiteBg,
  withShadow,
}) => (
  <Wrapper isRoundedWhiteBg={isRoundedWhiteBg} withShadow={withShadow}>
    {children}
  </Wrapper>
);
