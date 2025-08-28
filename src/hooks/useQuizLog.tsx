import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, PaginationResponse, QuizLog } from '@@types/index.ts';
import { defaultPaginationValue } from '@@types/defaultValues.ts';

function useQuizLog() {
  const { api } = useApi();

  const getQuizLogs = (page: number, size: number) => {
    return api
      .get<ApiResponse<PaginationResponse<QuizLog[]>>>(`/quizlogs`, { params: { page, size } })
      .then((response) => response.data.data)
      .catch(() => defaultPaginationValue);
  };

  return { getQuizLogs };
}

export default useQuizLog;
