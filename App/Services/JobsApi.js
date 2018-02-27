import Secrets from 'react-native-config'
import apisauce from 'apisauce';

const endpoint = 'api/job-listings'

const create = (baseURL = Secrets.API_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 32000
  });

  const fetchJobsIndex = () => api.get(endpoint);

  return {
    fetchJobsIndex
  }
}

export default {
  create
}
