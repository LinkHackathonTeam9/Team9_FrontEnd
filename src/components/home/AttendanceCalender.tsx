import styled from '@emotion/styled';
import { GGAMJA_COLOR } from '../../styles/Colors';

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 첫 줄 4칸 기준 */
  grid-template-rows: repeat(2, 150px); /* 2줄 */
  gap: 8px;
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const DayItem = styled.div<{ isDouble?: boolean }>`
  background-color: ${GGAMJA_COLOR.GREEN};
  //   background-color: #faf8f5;
  border-radius: 8px;
  display: flex;
  box-sizing: border-box;
  padding: 10px 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  border: none;

  ${({ isDouble }) =>
    isDouble &&
    `
    grid-column: span 2; /* 가로로 두 칸 차지 */
  `}
`;

const DayItemText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const DayItemImageContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 5px;
  object-fit: cover;

  border-radius: 8px;
`;

const DayItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
`;

export default function AttendanceCalendar() {
  return (
    <CalendarWrapper>
      {/* 1행 (4칸) */}
      <DayItem>
        <DayItemText>1일차</DayItemText>
        <DayItemImageContainer>
          <DayItemImage src={'/images/attendance/1.png'} />
        </DayItemImageContainer>
      </DayItem>
      <DayItem>
        <DayItemText>2일차</DayItemText>
        <DayItemImageContainer>
          <DayItemImage src={'/images/attendance/2.png'} />
        </DayItemImageContainer>
      </DayItem>
      <DayItem>
        <DayItemText>3일차</DayItemText>
        <DayItemImageContainer>
          <DayItemImage src={'/images/attendance/3.png'} />
        </DayItemImageContainer>
      </DayItem>
      <DayItem>
        <DayItemText>4일차</DayItemText>
        <DayItemImageContainer>
          <DayItemImage src={'/images/attendance/4.png'} />
        </DayItemImageContainer>
      </DayItem>

      {/* 2행 (5, 6, 7일차) */}
      <DayItem>
        <DayItemText>5일차</DayItemText>
        <DayItemImageContainer>
          <DayItemImage src={'/images/attendance/5.png'} />
        </DayItemImageContainer>
      </DayItem>
      <DayItem>
        <DayItemText>6일차</DayItemText>
        <DayItemImageContainer>
          <DayItemImage src={'/images/attendance/6.png'} />
        </DayItemImageContainer>
      </DayItem>
      <DayItem isDouble>
        <DayItemText>7일차</DayItemText>
        <DayItemImageContainer>
          <DayItemImage src={'/images/attendance/7.png'} />
        </DayItemImageContainer>
      </DayItem>
    </CalendarWrapper>
  );
}
