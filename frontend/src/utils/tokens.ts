import Cookies from 'js-cookie';
import {
  COOKIE_DOMAIN,
  MONTHS_TO_STORE_A_TOKEN_COOKIE,
  TOKEN_COOKIE_NAME,
} from './constants';

export type ITokens = {
  accessToken?: string;
  refreshToken?: string;
};

export const saveTokens = (tokens: ITokens) => {
  const myDate = new Date();
  myDate.setMonth(myDate.getMonth() + MONTHS_TO_STORE_A_TOKEN_COOKIE);

  Cookies.set(TOKEN_COOKIE_NAME, JSON.stringify(tokens), {
    expires: myDate,
    domain: COOKIE_DOMAIN,
    secure: true,
  });
};

export const getTokens = (): ITokens => {
  try {
    return JSON.parse(Cookies.get(TOKEN_COOKIE_NAME) || '');
  } catch (_) {
    return {};
  }
};

export const removeTokens = () => Cookies.remove(TOKEN_COOKIE_NAME);
