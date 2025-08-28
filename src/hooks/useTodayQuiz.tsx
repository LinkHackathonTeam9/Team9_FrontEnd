import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, Quiz, SubmitTodayQuizAnswerResponse } from '@@types/index.ts';

export type QuizStatus = 'loading' | 'solved' | 'available' | 'error';

function useTodayQuiz() {
  const { api } = useApi();

  const checkTodayQuizSolved = () => {
    return api.get<ApiResponse<{ isSolved: boolean }>>('/today-quizzes/status').then((response) => response.data.data.isSolved);
  };

  const fetchTodayQuiz = () => {
    return api.get<ApiResponse<Quiz>>('/today-quizzes').then((response) => response.data.data);
  };

  const submitTodayQuizAnswer = (quizId: number, answer: string) => {
    return api.post<SubmitTodayQuizAnswerResponse>(`/today-quizzes/${quizId}/submit`, { answer }).then((response) => response.data);
  };

  return { fetchTodayQuiz, submitTodayQuizAnswer, checkTodayQuizSolved };
}

export default useTodayQuiz;
