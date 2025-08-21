import { useState } from 'react';
import Item from './Item';
import type { PackingListProps } from '../types';

const PackingList = ({
  items,
  onDelete,
  onComplete,
  onClear,
}: PackingListProps) => {
  const [sort, setSort] = useState('input');
  const sortedArray = [...items].sort((a, b) => {
    if (sort === 'input') return a.id - b.id;
    if (sort === 'description')
      return a.description.localeCompare(b.description);
    if (sort === 'packed') return Number(a.packed) - Number(b.packed);
    return 0;
  });

  return (
    <div className="list">
      <ul>
        {sortedArray.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onClear}>CLEAR LIST</button>
      </div>
    </div>
  );
};

export default PackingList;
