import type { FrigeItem } from '@data/reducers/frige';

export interface FrigeProps {
  foodList: FrigeItem[];
  removeFrigeItem: (id: number) => void;
}
