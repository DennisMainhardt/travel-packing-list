import { useState } from 'react';
import Logo from './components/Logo.tsx';
import Form from './components/Form.tsx';
import PackingList from './components/PackingList.tsx';
import Stats from './components/Stats.tsx';
import type { PackingItem } from './types.ts';

const initialItems: PackingItem[] = [
  { id: 1, description: 'Passport', quantity: 1, packed: false },
  { id: 2, description: 'Drivers License', quantity: 1, packed: false },
  { id: 3, description: 'Chargers', quantity: 2, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item: PackingItem) => {
    setItems((items) => [...items, item]);
  };

  const handleDelete = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleComplete = (id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onComplete={handleComplete}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
