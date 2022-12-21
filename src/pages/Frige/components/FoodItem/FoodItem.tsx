import CloseButtonIcon from '@assets/images/closeButton.svg';

import { getColor } from './utlis/foodColors';

import S from './FoodItem.scss';

import { FC, useCallback, useMemo } from 'react';
import type { FoodItemProps } from './types';
import { getExpiresText } from './utlis/getExpiresText';
import classnames from 'classnames';

const FoodItem: FC<FoodItemProps> = ({
  id,
  name,
  foodType,
  expires,
  onRemove,
}) => {
  console.log({ id, name, foodType, expires, onRemove });

  const onClick = useCallback(() => onRemove(id), [id]);
  const color = useMemo(() => getColor(foodType), [foodType]);

  const expirationStatus = useMemo(() => getExpiresText(expires), [expires]);
  const expirationCn = classnames(S.foodExpires, S[`foodExpires-${expirationStatus.status}`]);

  return (
    <div key={id} className={S.foodItem}>
      <div className={S.foodType} style={{ backgroundColor: color }}></div>
      <div className={S.foodName}>{name}</div>
      <div className={expirationCn}>{expirationStatus.text}</div>
      <CloseButtonIcon
        onClick={onClick}
        className={S.foodRemoveButton}
      />
    </div>
  );
};

export default FoodItem;
