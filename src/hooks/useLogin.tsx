import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, LoginResponse } from '@@types/index.ts';

function useLogin() {
  const { api } = useApi();

  const fetchLogin = (email: string, password: string) => {
    return api
      .post<ApiResponse<LoginResponse>>('/members/login', { email, password })
      .then(() => true)
      .catch((error) => {
        alert(error.response.data.message);
        return false;
      });
  };

  return { fetchLogin };
}

export default useLogin;
