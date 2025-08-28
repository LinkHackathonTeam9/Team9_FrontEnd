import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { GGAMJA_COLOR } from '../../styles/Colors';

type ProgressBarProps = {
  startPoint: number;
  endPoint: number;
  totalPoint: number;
};

const TRACK_BG = '#ece6e1';

const waveMove = keyframes`
  from { background-position: 0 0; }
  to { background-position: 24px 0; }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Track = styled.div`
  width: 95%;
  height: 14px;
  background: ${TRACK_BG};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.06);
`;

const Fill = styled.div<{ percent: number; color: string }>`
  position: relative;
  width: ${({ percent }) => percent}%;
  height: 100%;
  background: ${({ color }) => color};
  border-radius: inherit;
  transition: width 300ms ease-out;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.3) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.3) 75%,
      transparent 75%,
      transparent
    );
    background-size: 24px 24px;
    animation: ${waveMove} 1.2s linear infinite;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function pickColor(percent: number) {
  if (percent < 33) return GGAMJA_COLOR.LIGHT_BROWN;
  if (percent < 66) return GGAMJA_COLOR.DARK_BROWN;
  return GGAMJA_COLOR.GREEN;
}

export default function ProgressBar({ startPoint, endPoint, totalPoint }: ProgressBarProps) {
  const denom = Math.max(1, endPoint - startPoint);
  const raw = ((totalPoint - startPoint) / denom) * 100;
  const percent = Math.round(clamp01(raw / 100) * 100);
  const color = pickColor(percent);

  return (
    <Wrapper>
      <Track>
        <Fill percent={percent} color={color} />
      </Track>
    </Wrapper>
  );
}
