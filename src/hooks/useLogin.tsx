import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, LoginResponse } from '@@types/index.ts';

function useLogin() {
  const { api } = useApi();

  const fetchLogin = (email: string, password: string) => {
    return api.post<ApiResponse<LoginResponse>>('/members/login', { email, password }).then((response) => response.data.data);
  };

  return { fetchLogin };
}

export default useLogin;
