import type { FoodListItem } from '@data/reducers/foodList';

export interface FoodItemProps extends FoodListItem {
  onRemove: (id: number) => void;
  onCheck: (id: number, status: boolean) => void;
}

export enum ExpirationStatus {
  Expired = 'Expired',
  OneDayLast = 'OneDayLast',
  NotExpired = 'NotExpired',
  Infinity = 'Infinity',
}
