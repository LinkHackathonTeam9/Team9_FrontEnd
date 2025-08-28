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
