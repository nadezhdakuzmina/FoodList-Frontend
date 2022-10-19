import { resolve } from 'path';

export const BASE_PATH = resolve(__dirname, '../');

export const IS_PRODUCTION = process.env.isProduction;

export const SERVER_PORT = 3000;
export const STATIC_PATH = `${BASE_PATH}/public`;
export const INDEX_PATH = `${STATIC_PATH}/index.html`;

export const PRELOADED_STATE_KEY = '__PRELOADED_STATE__';
