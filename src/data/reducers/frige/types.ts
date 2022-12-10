export type FrigeItem = {
  id: number;
  name: string;
  expires: number;
  foodType: string;
};

export type FrigeState = {
  items: FrigeItem[];
};
