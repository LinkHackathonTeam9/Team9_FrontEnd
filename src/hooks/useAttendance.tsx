import useApi from '@hooks/useApi';
import type { ApiResponse, AttendanceResponse } from '@@types/index.ts';

function useAttendance() {
  const { api } = useApi();

  const fetchAttendance = () => {
    return api.get<ApiResponse<AttendanceResponse>>(`/attendance/weekly`).then((response) => response.data.data);
  };

  return { fetchAttendance };
}

export default useAttendance;
