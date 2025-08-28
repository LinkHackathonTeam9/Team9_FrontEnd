import type { Card, Quiz } from '@@types/index.ts';

export const defaultQuizValue: Quiz = {
  todayQuizId: 0,
  cardId: 0,
  question: 'Loading...',
  answer: 'Loading...',
  options: ['Loading...', 'Loading...', 'Loading...', 'Loading...'],
};

export const defaultCardValue: Card = {
  id: 0,
  category: 'COMMON_KNOWLEDGE',
  title: 'Loading...',
  meaning: 'Loading...',
  difficulty: 1,
};
