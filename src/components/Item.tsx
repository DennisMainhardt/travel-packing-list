import type { PackingItem } from '../types';

interface ItemProps {
  item: PackingItem;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

const Item = ({ item, onDelete, onComplete }: ItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onComplete(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
};

export default Item;
