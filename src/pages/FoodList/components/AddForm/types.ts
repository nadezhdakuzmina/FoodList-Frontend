import type { FoodListItem } from '@data/reducers/foodList';

export interface AddFormProps {
  addItem: (item: {name: string}) => Promise<boolean>;
}
