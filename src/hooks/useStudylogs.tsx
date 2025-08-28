import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, PaginationResponse, StudyLog } from '@@types/index.ts';
import { defaultPaginationValue } from '@@types/defaultValues.ts';

function useStudylogs() {
  const { api } = useApi();

  const fetchStudylogs = (page: number, size: number) => {
    return api
      .get<ApiResponse<PaginationResponse<StudyLog[]>>>('/studylogs', { params: { page, size } })
      .then((response) => response.data.data)
      .catch(() => defaultPaginationValue);
  };

  return { fetchStudylogs };
}

export default useStudylogs;
