import type { Card, DetailQuizLog, DetailStudyLog, PaginationResponse, Quiz } from '@@types/index.ts';

export const defaultQuizValue: Quiz = {
  todayQuizId: 0,
  cardId: 0,
  question: 'Loading...',
  answer: 'Loading...',
  options: ['Loading1', 'Loading2', 'Loading3', 'Loading4'],
};

export const defaultCardValue: Card = {
  id: 0,
  category: 'COMMON_KNOWLEDGE',
  title: 'Loading...',
  meaning: 'Loading...',
  difficulty: 1,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const defaultPaginationValue: PaginationResponse<any> = {
  content: [],
  pageable: {
    pageNumber: -1,
    pageSize: 10,
    sort: {
      sorted: false,
      empty: true,
      unsorted: true,
    },
    offset: 0,
    paged: true,
    unpaged: false,
  },
  totalPages: 0,
  totalElements: 0,
  last: false,
  number: 0,
  size: 6,
  numberOfElements: 0,
  sort: {
    sorted: false,
    empty: true,
    unsorted: true,
  },
  first: true,
  empty: true,
};

export const defaultDetailStudylogValue: DetailStudyLog = {
  logId: 0,
  cardId: 0,
  title: 'Loading...',
  category: 'COMMON_KNOWLEDGE',
  date: '1970-01-01T00:00:00',
  meaning: 'Loading...',
  difficulty: 1,
};

export const defaultDetailQuizLogValue: DetailQuizLog = {
  quizLogId: 0,
  isCorrect: false,
  selectedAnswer: 'Loading...',
  date: '1970-01-01T00:00:00',
  quiz: {
    quizId: 0,
    question: 'Loading...',
    answer: 'Loading...',
    option1: 'Loading1',
    option2: 'Loading2',
    option3: 'Loading3',
  },
};
