import { api } from './';

export const setBearerToken = (token: string) => {
  if (token) {
    api.defaults.headers.common['Bearer'] = token;
  } else {
    delete api.defaults.headers.common['Bearer'];
  }
};