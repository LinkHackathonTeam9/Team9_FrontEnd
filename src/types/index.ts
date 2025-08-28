export const CARD_CATEGORY = {
  CAPITAL: 'CAPITAL',
  PROVERB: 'PROVERB',
  ENGLISH: 'ENGLISH',
  SCIENCE: 'SCIENCE',
  HISTORY: 'HISTORY',
  COMMON_KNOWLEDGE: 'COMMON_KNOWLEDGE',
} as const;

export type CardCategory = (typeof CARD_CATEGORY)[keyof typeof CARD_CATEGORY];

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface PaginationResponse<T> {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  number: number;
  size: number;
  numberOfElements: number;
  sort: Sort;
  first: boolean;
  empty: boolean;
}

export interface SignupResponse {
  id: number;
  nickname: string;
}

export interface LoginResponse {
  id: number;
  nickname: string;
  levelName: string;
  bonusGiven: boolean;
  levelChanged: boolean;
}

export interface HomeResponse {
  nickname: string;
  points: number;
  level: {
    level: number;
    startPoint: number;
    endPoint: number;
    characterName: string;
    characterUrl: string;
  };
}

export interface Quiz {
  todayQuizId: number;
  cardId: number;
  question: string;
  answer: string;
  options: string[];
}

export interface Card {
  id: number;
  category: CardCategory;
  title: string;
  meaning: string;
  difficulty: number;
}

export interface SubmitTodayQuizAnswerResponse {
  todayQuizId: number;
  isCorrect: boolean;
  correctAnswer: string;
}

export interface QuizLog {
  quizLogId: number;
  date: string;
  category: CardCategory;
  isCorrect: boolean;
}

export interface DetailQuizLog {
  quizLogId: number;
  isCorrect: boolean;
  selectedAnswer: string;
  date: string;
  quiz: Quiz;
}
