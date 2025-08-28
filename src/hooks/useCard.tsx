import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, Card } from '@@types/index.ts';

function useCard() {
  const { api } = useApi();

  const fetchCard = (cardId: number) => {
    return api.get<ApiResponse<Card>>(`/cards/${cardId}`).then((response) => response.data.data);
  };

  return { fetchCard };
}

export default useCard;
