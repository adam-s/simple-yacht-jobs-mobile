import Secrets from 'react-native-config';
import apisauce from 'apisauce';

const create = (baseURL = Secrets.API_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 32000,
  });

  const login = credentials => api.post('auth/login', credentials);

  return {
    login,
  };
};

export default { create };
