export const API_BASE_URL =
  process.env.API_BASE_URL || 'https://api.kindred.kz';
export const DEBUG = process.env.NODE_ENV === 'development';
export const PRODUCTION = process.env.NODE_ENV === 'production';

export const COOKIE_DOMAIN = process.env.VERCEL_URL || '';
export const MONTHS_TO_STORE_A_TOKEN_COOKIE = 3;
export const TOKEN_COOKIE_NAME = 'kindred-token';

export const LOGIN_URL = '/auth/login/';
export const PROFILE_URL = '/profile/';
export const POSTS_URL = '/posts/';
export const EVENTS_URL = '/events/';
export const COMMUNITY_POSTS_URL = (id: number) => `/communities/${id}/posts/`;
export const REGISTER_URL = '/auth/register/';
