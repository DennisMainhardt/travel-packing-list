export interface PackingItem {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export interface PackingListProps {
  items: PackingItem[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
  onClear: () => void;
}