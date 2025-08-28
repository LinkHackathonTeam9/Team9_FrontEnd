import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, Card, CardCategory } from '@@types/index.ts';

function useCard() {
  const { api } = useApi();

  const fetchCard = (cardId: number) => {
    return api.get<ApiResponse<Card>>(`/cards/${cardId}`).then((response) => response.data.data);
  };

  const fetchTodayCard = (category: CardCategory) => {
    return api.get<ApiResponse<Card>>(`/todaycards/${category}`).then((response) => response.data.data);
  };

  const fetchLearnedCategories = () => {
    return api.get<ApiResponse<{ categories: CardCategory[] }>>('/todaycards/category').then((response) => response.data.data.categories);
  };

  const completeCard = (cardId: number) => {
    return api.post(`/cards/complete/${cardId}`);
  };

  return { fetchCard, fetchTodayCard, completeCard, fetchLearnedCategories };
}

export default useCard;
