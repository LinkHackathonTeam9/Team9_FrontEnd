import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, HomeResponse } from '@@types/index.ts';

function useHome() {
  const { api } = useApi();

  const fetchHome = () => {
    return api.get<ApiResponse<HomeResponse>>('/members/home').then((response) => response.data.data);
  };
  return { fetchHome };
}

export default useHome;
