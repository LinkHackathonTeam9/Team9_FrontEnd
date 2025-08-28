import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, DetailQuizLog, PaginationResponse, QuizLog } from '@@types/index.ts';
import { defaultDetailQuizLogValue, defaultPaginationValue } from '@@types/defaultValues.ts';

function useQuizLog() {
  const { api } = useApi();

  const getQuizLogs = (page: number, size: number) => {
    return api
      .get<ApiResponse<PaginationResponse<QuizLog[]>>>(`/quizlogs`, { params: { page, size } })
      .then((response) => response.data.data)
      .catch(() => defaultPaginationValue);
  };

  const getDetailQuizLog = (quizLogId: number) => {
    return api
      .get<ApiResponse<DetailQuizLog>>(`/quizlogs/${quizLogId}`)
      .then((response) => response.data.data)
      .catch(() => defaultDetailQuizLogValue);
  };

  return { getQuizLogs, getDetailQuizLog };
}

export default useQuizLog;
