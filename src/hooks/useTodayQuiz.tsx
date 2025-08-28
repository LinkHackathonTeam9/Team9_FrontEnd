import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, Quiz, SubmitTodayQuizAnswerResponse } from '@@types/index.ts';

function useTodayQuiz() {
  const { api } = useApi();

  const fetchTodayQuiz = () => {
    return api.get<ApiResponse<Quiz>>('/today-quizzes').then((response) => response.data.data);
  };

  const submitTodayQuizAnswer = (quizId: number, answer: string) => {
    return api.post<SubmitTodayQuizAnswerResponse>(`/today-quizzes/${quizId}/submit`, { answer }).then((response) => response.data);
  };

  return { fetchTodayQuiz, submitTodayQuizAnswer };
}

export default useTodayQuiz;
