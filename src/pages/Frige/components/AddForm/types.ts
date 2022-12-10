import type { FrigeItem } from '@data/reducers/frige';

export interface AddFormProps {
  addItem: (item: Omit<FrigeItem, 'id'>) => Promise<boolean>;
}
