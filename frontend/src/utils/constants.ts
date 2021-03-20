export const API_BASE_URL =
  process.env.API_BASE_URL || 'https://api.kindred.kz';
export const DEBUG = process.env.NODE_ENV === 'development';
export const PRODUCTION = process.env.NODE_ENV === 'production';

export const COOKIE_DOMAIN = process.env.VERCEL_URL || '';
export const MONTHS_TO_STORE_A_TOKEN_COOKIE = 3;
export const TOKEN_COOKIE_NAME = 'kindred-token';
