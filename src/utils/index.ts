import type { CardCategory } from '@@types/index';

export const CARD_CATEGORY_KO: { [key in CardCategory]: string } = {
  CAPITAL: '수도',
  PROVERB: '속담',
  ENGLISH: '영어',
  SCIENCE: '과학',
  HISTORY: '역사',
  COMMON_KNOWLEDGE: '상식',
};

export const categoryMaterialIcons: { [key: string]: string } = {
  CAPITAL: 'account_balance',
  PROVERB: 'menu_book',
  ENGLISH: 'abc',
  SCIENCE: 'science',
  HISTORY: 'history_edu',
  COMMON_KNOWLEDGE: 'lightbulb',
};

export const difficultyText: { [key: number]: string } = {
  1: '하',
  2: '중',
  3: '상',
};
