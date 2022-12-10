import { FrigeItem } from '@data/reducers/frige/types';
import type { DirtyItem } from '@data/resourses/frige/types';

export const normalizeItems = (data: DirtyItem[]): FrigeItem[] => data.map((item) => ({
  ...item,
  expires: parseInt(item.expires, 10),
}));
