import useApi from '@hooks/useApi';
import type { ApiResponse, MonthlyAnalysisResponse } from '@@types/index.ts';

function useMonthlyAnalysis() {
  const { api } = useApi();

  const fetchMonthlyAnalysis = () => {
    return api.get<ApiResponse<MonthlyAnalysisResponse>>(`/analysis/categories/monthly`).then((response) => response.data.data);
  };

  return { fetchMonthlyAnalysis };
}

export default useMonthlyAnalysis;
