import type { ApiResponse, SignupResponse } from '@@types/index.ts';
import useApi from '@hooks/useApi.tsx';

function useSignup() {
  const { api } = useApi();

  const fetchSignup = (nickname: string, email: string, password: string, passwordConfirm: string) => {
    const response = api
      .post<ApiResponse<SignupResponse>>('/members/register', { nickname, email, password, passwordConfirm })
      .then((response) => response.data.data);
  };

  return { fetchSignup };
}

export default useSignup;
