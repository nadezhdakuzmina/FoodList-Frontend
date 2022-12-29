import { connect } from 'react-redux';

import { ChangeEvent, useCallback, useState } from 'react';
import { Input, DatePicker, Button } from 'antd';

import { addItemResolver } from '@data/actions/frige/resolvers';

import S from './AddForm.scss';

import type { FC } from 'react';
import type { FrigeItem } from '@data/reducers/frige';
import type { AddFormProps } from './types';
import { getCategories } from '@pages/Frige/utils';
import { State } from '@data/types';
import SearchInput from '@components/SearchInput';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item: Omit<FrigeItem, 'id'>) => dispatch(addItemResolver(item)),
});

const mapStateToProps = (state: State) => ({
  categories: getCategories(state.frige.items),
});

const AddForm: FC<AddFormProps> = ({ addItem, categories }) => {
  const [name, setName] = useState<string>();
  const [foodType, setFoodType] = useState<string>();
  const [date, setDate] = useState<moment.Moment>();
  const [hasSent, setSent] = useState<boolean>(false);

  const onSetName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const nameInputStatus = !name && hasSent ? 'error' : undefined;
  const foodTypeInputStatus = !foodType && hasSent ? 'error' : undefined;
  const datePickerStatus = !date && hasSent ? 'error' : undefined;

  const onAdd = useCallback(async () => {
    setSent(true);

    if (!name || !foodType || !date) {
      return;
    }

    const hasBeenAdded = await addItem({
      name,
      foodType,
      expires: date.unix() * 1000,
    });
    
    if (hasBeenAdded) {
      setDate(null);
      setName(null);
      setFoodType(null);
      setSent(null);
    }
  }, [name, foodType, date, addItem]);

  return (
    <div className={S.root}>
      <div className={S.title}>Добавить продукт</div>
      <Input
        status={nameInputStatus}
        value={name}
        className={S.input}
        placeholder="Введите наименование продукта"
        onChange={onSetName}
        size="large"
        allowClear
      />
      <SearchInput
        items={categories}
        status={foodTypeInputStatus}
        value={foodType}
        className={S.input}
        placeholder="Введите категрию"
        onChange={setFoodType}
        size="large"
        allowClear
      />
      <DatePicker
        status={datePickerStatus}
        value={date}
        className={S.input}
        placeholder="Укажите срок годности"
        onChange={setDate}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
