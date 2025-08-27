import type { CardCategory } from '@@types/index';

export const CARD_CATEGORY_KO: { [key in CardCategory]: string } = {
  CAPITAL: '수도',
  PROVERB: '속담',
  ENGLISH: '영어',
  SCIENCE: '과학',
  HISTORY: '역사',
  COMMON_KNOWLEDGE: '상식',
};
