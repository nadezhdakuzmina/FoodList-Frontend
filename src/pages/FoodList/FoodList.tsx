import type { FC } from 'react';
import { Button } from 'antd';
import S from './FoodList.scss'

const FoodList: FC = () => {
  return (
    <div className={S.root}>
      <span className={S.text}>it's a FoodList</span>
      <Button type="primary" className={S.button}>начать</Button>
    </div>
  );
};

export default FoodList;
