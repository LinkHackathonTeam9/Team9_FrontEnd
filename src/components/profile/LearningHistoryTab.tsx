import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import type { DetailStudyLog, PaginationResponse, StudyLog } from '@@types/index.ts';
import { defaultDetailStudylogValue, defaultPaginationValue } from '@@types/defaultValues.ts';
import useStudylogs from '@hooks/useStudylogs.tsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CARD_CATEGORY_KO, categoryMaterialIcons } from '@utils/index.ts';
import Modal from '@components/common/Modal.tsx';
import LearningHistoryDetail from './details/LearningHistoryDetail.tsx';

export const TabContent = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

export const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 2px solid #4d403d;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 4px 4px 0px #4d403d;
  cursor: pointer;
`;

export const HistoryIcon = styled.span`
  font-size: 24px;
  color: #84cc16;
  background-color: #eae3dc;
  border-radius: 50%;
  padding: 10px;
  margin-right: 16px;
`;

export const HistoryDetails = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  p {
    font-size: 13px;
    color: #8b7e74;
  }
`;

interface LearningHistoryTabProps {
  isActive: boolean;
}

const LearningHistoryTab = ({ isActive }: LearningHistoryTabProps) => {
  const [response, setResponse] = useState<PaginationResponse<StudyLog[]>>(defaultPaginationValue);
  const [studylogs, setStudylods] = useState<StudyLog[]>([]);
  const { fetchStudylogs, fetchDetailStudylog } = useStudylogs();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<DetailStudyLog>(defaultDetailStudylogValue);

  const fetchMoreData = async () => {
    const nextPage = response.pageable.pageNumber + 1;
    const res = await fetchStudylogs(nextPage, response.pageable.pageSize);
    setStudylods((prev) => [...prev, ...res.content]);
    setResponse(res);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  const handleItemClick = async (log: StudyLog) => {
    const card = await fetchDetailStudylog(log.logId);
    setSelectedLog(card);
    setIsModalOpen(true);
  };

  return (
    <TabContent isActive={isActive}>
      <InfiniteScroll next={fetchMoreData} hasMore={!response.last} loader={null} dataLength={studylogs.length}>
        {studylogs.map((item, index) => (
          <HistoryItem key={index} onClick={() => handleItemClick(item)}>
            <HistoryIcon className="material-symbols-outlined">{categoryMaterialIcons[item.category]}</HistoryIcon>
            <HistoryDetails>
              <h3>{item.title}</h3>
              <p>
                {item.date.split('T')[0]} ・ {CARD_CATEGORY_KO[item.category]}
              </p>
            </HistoryDetails>
          </HistoryItem>
        ))}
      </InfiniteScroll>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedLog && <LearningHistoryDetail onClose={() => setIsModalOpen(false)} detailStudylog={selectedLog} />}
      </Modal>
    </TabContent>
  );
};

export default LearningHistoryTab;
