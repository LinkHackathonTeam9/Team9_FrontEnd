import axios from 'axios';

function useApi() {
  const api = axios.create({
    baseURL: 'https://api.ggamja.o-r.kr/api',
    withCredentials: true,
  });

  return { api };
}

export default useApi;
