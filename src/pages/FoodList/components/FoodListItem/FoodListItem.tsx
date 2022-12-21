import CloseButtonIcon from '@assets/images/closeButton.svg';

import S from './FoodListItem.scss';

import { FC, useCallback } from 'react';
import type { FoodItemProps } from './types';
import classnames from 'classnames';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const FoodItem: FC<FoodItemProps> = ({
  id,
  name,
  isChecked,
  onRemove,
  onCheck,
}) => {
  const onClick = useCallback(() => onRemove(id), [id]);
  const onSetIsChecked = (e: CheckboxChangeEvent) => {
    onCheck(id, e.target.checked);
  };

  return (
    <div key={id} className={classnames(S.foodItem, { [S.foodItemChecked]: isChecked })}>
      <Checkbox checked={isChecked} onChange={onSetIsChecked} className={S.foodName}>{name}</Checkbox>
      <CloseButtonIcon
        onClick={onClick}
        className={S.foodRemoveButton}
      />
    </div>
  );
};

export default FoodItem;
