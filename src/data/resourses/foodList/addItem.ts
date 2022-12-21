import axios from 'axios';
import { RESOURCE_URL } from './constants';

import type { FoodListItem } from '@data/reducers/foodList';

const METHOD_URL = `${RESOURCE_URL}/add`;

export const addItem = async (token: string, item: Omit<FoodListItem, 'id'>) => {
  return axios(METHOD_URL, {
    method: 'POST',
    data: {
      ...item,
      token
    },
  })
    .then((res) => Boolean(res.data));
};
