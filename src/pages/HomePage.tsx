import Header from '@components/common/Header';
import DailyCard from '@components/home/DailyCard';
import ShortcutCard from '@components/home/ShortcutCard';
import CountingCard from '@components/home/CountingCard';
import BottomNavBar from '@components/common/BottomNavBar';
import styled from '@emotion/styled';

const HomePageContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 360px;
  height: 800px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 590px;
  gap: 30px;
  overflow: scroll;
  scrollbar-width: none;
  background-color: #fbf8f1;
`;

const DailyCardContainer = styled.div`
  margin-top: 160px;
`;

const ShortcutCardContainer = styled.div`
  display: flex;
  width: 320px;
  height: auto;
  flex-direction: column;
  gap: 20px;
`;

const CountingCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 100px;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <ContentContainer>
        <DailyCardContainer>
          <DailyCard />
        </DailyCardContainer>
        <ShortcutCardContainer>
          <ShortcutCard title="출석체크" icon="👋" category="attendance" count={0} onClick={() => {}} />
          <ShortcutCard title="퀴즈 풀기" icon="💡" category="quiz" count={0} onClick={() => {}} />
          <ShortcutCard title="카드 학습" icon="📚" category="education" count={0} onClick={() => {}} />
        </ShortcutCardContainer>
        <CountingCardContainer>
          <CountingCard count={5} label="학습한 카드" category="learned" />
          <CountingCard count={3} label="완료한 퀴즈" category="quiz" />
          <CountingCard count={3} label="연속 출석" category="attendance" />
          <CountingCard count={1} label="현재 레벨" category="level" />
        </CountingCardContainer>
      </ContentContainer>
      <BottomNavBar />
    </HomePageContainer>
  );
};

export default HomePage;
