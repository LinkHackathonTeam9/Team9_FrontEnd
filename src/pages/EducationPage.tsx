import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Modal from '../components/common/Modal';
import FlippableCard from '../components/education/FlippableCard';
import BottomNavBar from '../components/common/BottomNavBar';
import { CARD_CATEGORY_KO, categoryMaterialIcons } from '../utils';
import { type Card, CARD_CATEGORY, type CardCategory } from '@@types/index.ts';
import { GGAMJA_COLOR } from '../styles/Colors.ts';
import { defaultCardValue } from '@@types/defaultValues.ts';
import useCard from '@hooks/useCard.tsx';

const PageWrapper = styled.div`
  background-color: #faf8f5;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  padding-bottom: 80px;
`;

const Container = styled.div`
  padding: 40px 20px 20px 20px;
`;

const Header = styled.header`
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const PageSubtitle = styled.p`
  font-size: 16px;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
  margin-top: 8px;
  line-height: 1.5;
`;

const GridContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const Card = styled.div`
  background-color: white;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const Icon = styled.span`
  font-size: 40px;
  color: ${GGAMJA_COLOR.GREEN};
`;

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  margin-top: 12px;
`;

const Status = styled.p<{ isLearned?: boolean }>`
  font-size: 13px;
  color: ${({ isLearned }) => (isLearned ? GGAMJA_COLOR.GREEN : GGAMJA_COLOR.LIGHT_BROWN)};
  margin-top: 6px;
`;

const EducationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todayCardData, setTodayCardData] = useState<Card>(defaultCardValue);
  const [learnedCategories, setLearnedCategories] = useState<CardCategory[]>([]);

  const { fetchTodayCard, fetchLearnedCategories } = useCard();

  const handleOpenModal = async (category: CardCategory) => {
    const card = await fetchTodayCard(category);
    setTodayCardData(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getLearnedCategories = async () => {
    const categories = await fetchLearnedCategories();
    setLearnedCategories(categories);
  };

  useEffect(() => {
    getLearnedCategories();
  }, []);

  return (
    <PageWrapper>
      <Container>
        <Header>
          <PageTitle>오늘의 학습</PageTitle>
          <PageSubtitle>학습하고 싶은 카테고리를 선택하여 오늘의 카드를 확인해보세요.</PageSubtitle>
        </Header>

        <GridContainer>
          {Object.values(CARD_CATEGORY).map((category) => {
            const isLearned = learnedCategories.includes(category);
            const statusText = isLearned ? '학습 완료!' : '학습 전이에요!';

            return (
              <Card
                key={category}
                onClick={() => {
                  handleOpenModal(category);
                }}
              >
                <Icon className="material-symbols-outlined">{categoryMaterialIcons[category] || 'help'}</Icon>
                <CardTitle>{CARD_CATEGORY_KO[category]}</CardTitle>
                <Status isLearned={isLearned}>{statusText}</Status>
              </Card>
            );
          })}
        </GridContainer>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <FlippableCard cardData={todayCardData} learned={learnedCategories.includes(todayCardData.category)} onClose={handleCloseModal} />
        </Modal>
      </Container>
      <BottomNavBar />
    </PageWrapper>
  );
};

export default EducationPage;
