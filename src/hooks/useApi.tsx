import axios from 'axios';

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;

function useApi() {
  const api = axios.create({
    baseURL: ENVIRONMENT == 'development' ? 'http://localhost:8080/api' : 'https://api.ggamja.o-r.kr/api',
    withCredentials: true,
  });

  return { api };
}

export default useApi;
