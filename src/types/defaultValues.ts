import type { Quiz } from '@@types/index.ts';

export const defaultQuizValue: Quiz = {
  todayQuizId: 0,
  cardId: 0,
  question: 'Loading...',
  answer: 'Loading...',
  options: ['Loading...', 'Loading...', 'Loading...', 'Loading...'],
};
