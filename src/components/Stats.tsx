import type { PackingItem } from '../types';

interface StatsProps {
  items: PackingItem[];
}

const Stats = ({ items }: StatsProps) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage =
    totalItems > 0 ? Math.round((packedItems * 100) / totalItems) : 0;

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `You have ${totalItems} items on your list, and you already packed ${packedPercentage}%`}
      </em>
    </footer>
  );
};

export default Stats;
