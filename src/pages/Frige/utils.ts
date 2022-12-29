import { FrigeItem } from "@data/reducers/frige";

export const getCategories = (foodList: FrigeItem[]): string[] => {
  return Array.from(
    new Set (foodList.map(item => item.foodType))
  );
  
};
