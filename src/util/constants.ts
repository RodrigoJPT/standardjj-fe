export const API_BASE_URL = process.env.ENVIRONMENT === 'production' ? process.env.REACT_APP_API_URL : 'localhost:5000';

export enum QUERY_KEYS {
    series = 'series',
}