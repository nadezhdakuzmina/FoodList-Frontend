import { connect } from 'react-redux';

import { ChangeEvent, useCallback, useState } from 'react';
import { Input, Button } from 'antd';

import { addItemResolver } from '@data/actions/foodList/resolvers';

import S from './AddForm.scss';

import type { FC } from 'react';
import type { FoodListItem } from '@data/reducers/foodList';
import type { AddFormProps } from './types';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item: Omit<FoodListItem, 'id'>) => dispatch(addItemResolver(item)),
});

const AddForm: FC<AddFormProps> = ({ addItem }) => {
  const [name, setName] = useState<string>();
  const [count, setCount] = useState<string>();
  const [hasSent, setSent] = useState<boolean>(false);

  const onSetName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const onSetCount = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCount(event.target.value);
  }, []);

  const nameInputStatus = !name && hasSent ? 'error' : undefined;

  const onAdd = useCallback(async () => {
    setSent(true);

    if (!name) {
      return;
    }

    const hasBeenAdded = await addItem({
      name: count ? `${count} ${name}` : name,
    });
    
    if (hasBeenAdded) {
      setName(null);
      setCount(null);
      setSent(null);
    }
  }, [name, count, addItem]);

  return (
    <div className={S.root}>
      <div className={S.title}>Добавить продукт</div>
      <Input
        status={nameInputStatus}
        value={name}
        className={S.input}
        placeholder="Введите наименование товара"
        onChange={onSetName}
        size="large"
        allowClear
      />
      <Input
        value={count}
        required={false}
        className={S.input}
        placeholder="Введите количество товара"
        onChange={onSetCount}
        size="large"
        allowClear
      />
      <Button
        onClick={onAdd}
        className={S.button}
        type="primary"
      >
        Добавить продукт
      </Button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(AddForm);
