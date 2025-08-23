import Header from '@components/common/Header';
import DailyCard from '@components/home/DailyCard';
import ShortcutCard from '@components/home/ShortcutCard';
import CountingCard from '@components/home/CountingCard';
import BottomNavBar from '@components/common/BottomNavBar';

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <DailyCard />
        </div>
        <div>
          <ShortcutCard />
          <ShortcutCard />
          <ShortcutCard />
        </div>
        <div>
          <CountingCard count={5} label="학습한 카드" category="learned" />
          <CountingCard count={3} label="완료한 퀴즈" category="quiz" />
          <CountingCard count={3} label="연속 출석" category="attendance" />
          <CountingCard count={1} label="현재 레벨" category="level" />
        </div>
      </div>
      <BottomNavBar />
    </>
  );
};

export default HomePage;
