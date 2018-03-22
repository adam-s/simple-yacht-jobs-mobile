import Secrets from 'react-native-config';
import apisauce from 'apisauce';
import qs from 'qs';

const endpoint = 'api/job-listings';

const create = (baseURL = Secrets.API_URL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 32000,
  });

  const fetchJobsIndex = (tableState) => {
    const params = { tableState };
    const config = { paramsSerializer: () => qs.stringify(params) };
    return api.get(endpoint, params, config);
  };

  return {
    fetchJobsIndex,
  };
};

export default {
  create,
};
