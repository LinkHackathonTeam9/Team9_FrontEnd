import { useEffect, useState } from 'react';
import useAttendance from '@hooks/useAttendance';
import styled from '@emotion/styled';
import { GGAMJA_COLOR } from '../../styles/Colors';

const CalendarWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 첫 줄 4칸 기준 */
  grid-template-rows: repeat(2, 150px); /* 2줄 */
  gap: 8px;
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  background-color: #ecd5b2;
`;

const DayItem = styled.div<{ isDouble?: boolean; isAttended?: boolean }>`
  border-radius: 8px;
  display: flex;
  box-sizing: border-box;
  padding: 10px 3px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  height: 100%;
  border: none;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  background-color: #ff7575c4;
  ${({ isDouble }) =>
    isDouble &&
    `
    grid-column: span 2; /* 가로로 두 칸 차지 */
  `}

  ${({ isAttended }) =>
    isAttended &&
    `
    background-color: #c1e984;
    
  `}
`;

const DayItemText = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border: 1px solid ${GGAMJA_COLOR.LIGHT_BROWN};
  border-radius: 8px;
  background-color: #f5f1f1;
`;

const DayItemImageContainer = styled.div`
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  padding: 5px;
  object-fit: cover;
  border-radius: 8px;
  opacity: 1;
`;

const DayItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: none;
`;

export default function AttendanceCalendar() {
  const { fetchAttendance } = useAttendance();
  const [attendance, setAttendance] = useState<{ attended: boolean }[]>([]);

  useEffect(() => {
    const AttendanceData = async () => {
      const attendanceData = await fetchAttendance();
      setAttendance(attendanceData.days);
    };
    AttendanceData();
  }, []);

  return (
    <CalendarWrapper>
      {attendance.map((day, index) => {
        const dayNumber = index + 1;
        const isLastDay = dayNumber === 7;

        return (
          <DayItem key={dayNumber} isDouble={isLastDay} isAttended={day.attended}>
            <DayItemText>{dayNumber}일차</DayItemText>
            <DayItemImageContainer>
              <DayItemImage
                src={
                  day.attended
                    ? 'https://ggamja-images.s3.ap-northeast-2.amazonaws.com/level1.png'
                    : 'https://ggamja-images.s3.ap-northeast-2.amazonaws.com/Attendance-Failed.png'
                }
              />
            </DayItemImageContainer>
          </DayItem>
        );
      })}
    </CalendarWrapper>
  );
}
