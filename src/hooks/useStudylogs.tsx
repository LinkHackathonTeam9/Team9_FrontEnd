import useApi from '@hooks/useApi.tsx';
import type { ApiResponse, DetailStudyLog, PaginationResponse, StudyLog } from '@@types/index.ts';
import { defaultDetailStudylogValue, defaultPaginationValue } from '@@types/defaultValues.ts';

function useStudylogs() {
  const { api } = useApi();

  const fetchStudylogs = (page: number, size: number) => {
    return api
      .get<ApiResponse<PaginationResponse<StudyLog[]>>>('/studylogs', { params: { page, size } })
      .then((response) => response.data.data)
      .catch(() => defaultPaginationValue);
  };

  const fetchDetailStudylog = (studylogId: number) => {
    return api
      .get<ApiResponse<DetailStudyLog>>(`/studylogs/${studylogId}`)
      .then((response) => response.data.data)
      .catch(() => defaultDetailStudylogValue);
  };

  return { fetchStudylogs, fetchDetailStudylog };
}

export default useStudylogs;
