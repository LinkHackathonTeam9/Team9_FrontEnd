import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, Quiz } from '@@types/index.ts';

function useTodayQuiz() {
  const { api } = useApi();

  const fetchTodayQuiz = () => {
    return api.get<ApiResponse<Quiz>>('/todayquizzes').then((response) => response.data.data);
  };

  return { fetchTodayQuiz };
}

export default useTodayQuiz;
