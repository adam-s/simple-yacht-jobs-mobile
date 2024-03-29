import Secrets from 'react-native-config';
import apisauce from 'apisauce';

const ENDPOINT = 'api/crew-listings';

const create = (baseURL = Secrets.API_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 32000
  });

  const fetchCrewIndex = () => api.get(ENDPOINT);

  return {
    fetchCrewIndex
  }
};

export default { create };
