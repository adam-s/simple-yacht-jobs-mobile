import Secrets from 'react-native-config'
import apisauce from 'apisauce';

const endpoint = 'api/crew-listings'

const create = (baseURL = Secrets.API_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000
  });

  const fetchCrewIndex = () => api.get(endpoint);

  return {
    fetchCrewIndex
  }
}

export default {
  create
}
