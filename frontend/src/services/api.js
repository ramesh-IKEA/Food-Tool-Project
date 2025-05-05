import axios from 'axios'
import apiURl from '../config/apiConfig'
import ls from './localStorage'
const baseURL = process.env.NODE_ENV === 'development' ? apiURl.devURL : apiURl.prodURL;
const api = axios.create({
  baseURL: baseURL,
})
api.defaults.headers.common['Authorization'] = ls.get('x-access-token');
api.interceptors.request.use(config => {
  if (config.method === 'post') {
  } else {
    config.params.store_id = ls.get('user-store-id');
  }
  return config
});
api.interceptors.response.use(response => {
  return response
}, error => {
  const status = error.response ? error.response.status : null;
  if (status===400) {
    ls.remove('x-access-token')
    ls.remove('user-token')
    ls.remove('user-store-id')
    ls.remove('user-unit')
    ls.remove('user-function')
    window.location.href="/login?session=expired"
  }
  // if(error.code==='ERR_NETWORK'){
  //   window.location.href="/internal_error"
  // }

  return Promise.reject(error);
})
export default api;