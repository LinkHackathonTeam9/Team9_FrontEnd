import { useState } from 'react';
import BottomNavBar from '@components/common/BottomNavBar';
import LearningHistoryTab from '@components/profile/LearningHistoryTab';
import QuizHistoryTab from '@components/profile/QuizHistoryTab';
import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  background-color: #faf8f5;
  color: #4d403d;
  padding-bottom: 80px;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`;

export const PageHeader = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 24px;
  margin-top: 10px;
  font-weight: 700;
`;

export const Tabs = styled.div`
  display: flex;
  border: 2px solid #4d403d;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  text-align: center;
  background-color: ${({ isActive }) => (isActive ? '#4D403D' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : '#8B7E74')};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:first-of-type {
    border-right: 2px solid #4d403d;
  }
`;

type TabType = 'learning' | 'quiz';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('learning');

  return (
    <PageWrapper>
      <Container>
        <PageHeader>나의 활동 기록</PageHeader>

        <Tabs>
          <TabButton isActive={activeTab === 'learning'} onClick={() => setActiveTab('learning')}>
            학습 기록
          </TabButton>
          <TabButton isActive={activeTab === 'quiz'} onClick={() => setActiveTab('quiz')}>
            퀴즈 기록
          </TabButton>
        </Tabs>

        <LearningHistoryTab isActive={activeTab === 'learning'} />
        <QuizHistoryTab isActive={activeTab === 'quiz'} />
      </Container>
      <BottomNavBar />
    </PageWrapper>
  );
};

export default ProfilePage;
