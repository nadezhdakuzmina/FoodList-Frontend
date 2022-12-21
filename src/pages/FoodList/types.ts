import type { FoodListItem } from '@data/reducers/foodList';

export interface FoodListItemProps {
  foodList: FoodListItem[];
  removeFoodListItem: (id: number) => void;
  checkFoodListItem: (id: number, status: boolean) => void;
}
