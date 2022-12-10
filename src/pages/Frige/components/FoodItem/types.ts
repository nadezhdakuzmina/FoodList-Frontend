import type { FrigeItem } from '@data/reducers/frige';

export interface FoodItemProps extends FrigeItem {
  onRemove: (id: number) => void;
}

export enum ExpirationStatus {
  Expired = 'Expired',
  OneDayLast = 'OneDayLast',
  NotExpired = 'NotExpired',
  Infinity = 'Infinity',
}
