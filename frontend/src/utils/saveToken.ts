import Cookies from 'js-cookie';
import {
  COOKIE_DOMAIN,
  MONTHS_TO_STORE_A_TOKEN_COOKIE,
  TOKEN_COOKIE_NAME,
} from './constants';

export const saveToken = (token: string) => {
  const myDate = new Date();
  myDate.setMonth(myDate.getMonth() + MONTHS_TO_STORE_A_TOKEN_COOKIE);

  Cookies.set(TOKEN_COOKIE_NAME, token, {
    expires: myDate,
    domain: COOKIE_DOMAIN,
  });
};
