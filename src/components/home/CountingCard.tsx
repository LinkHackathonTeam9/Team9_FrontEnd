interface CountingCardProps {
  count: number;
  label: string;
  category: 'learned' | 'quiz' | 'attendance' | 'level';
}

const CountingCard = ({ count, label, category }: CountingCardProps) => {
  return (
    <div>
      <div>{count}</div>
      <div>{label}</div>
    </div>
  );
};

export default CountingCard;
