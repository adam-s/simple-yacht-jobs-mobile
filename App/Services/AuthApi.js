import Secrets from 'react-native-config';
import apisauce from 'apisauce';
import CookieManager from 'react-native-cookies';

const create = async (baseURL = Secrets.API_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 32000,
    withCredentials: true,
    headers: {
      Connection: 'keep-alive',
      'Access-Control-Allow-Credentials': true,
      credentials: 'include',
      redirect: 'follow',
      mode: 'same-origin',
    },
  });

  const cookies = await CookieManager.get(baseURL);

  console.log('cookies', cookies);

  api.addResponseTransform((response) => {
    console.log(response);
  });

  api.addRequestTransform((request) => {
    console.log(request);
  });

  const login = credentials => api.post('auth/login', credentials);

  return {
    login,
  };
};

export default { create };
