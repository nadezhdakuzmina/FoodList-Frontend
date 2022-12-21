export type FoodListItem = {
  id: number;
  name: string;
  expires: number;
  foodType: string;
  isChecked: boolean;
};

export type FoodListState = {
  items: FoodListItem[];
};
