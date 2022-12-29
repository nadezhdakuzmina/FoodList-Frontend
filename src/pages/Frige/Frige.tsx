import { FC, useCallback } from 'react';
import { connect } from 'react-redux';

import { removeItemResolver } from '@data/actions/frige/resolvers';

import Container from '@containers/Container';
import PageTitle from '@components/PageTitle';
import FoodItem from './components/FoodItem';
import AddForm from './components/AddForm';

import S from './Frige.scss';

import type { State } from '@root/data/types';
import type { FrigeProps } from './types';

const mapDispatchToProps = (dispatch) => ({
  removeFrigeItem: (id: number) => dispatch(removeItemResolver(id))
});

const mapStateToProps = (state: State) => ({
  foodList: state.frige.items,
});

const Frige: FC<FrigeProps> = ({ foodList, removeFrigeItem }) => {
  const sortedList = foodList.sort(({ expires: a }, { expires: b }) => {
    return Number(a) - Number(b);
  });

  return (
    <Container className={S.root}>
      <PageTitle>Моя аптечка</PageTitle>
      <div className={S.contentWrapper}>
        <div className={S.foodList}>
          {sortedList.length? sortedList.map((item) => (
            <FoodItem
              key={item.id}
              onRemove={removeFrigeItem}
              {...item}
            />
          )): <span> Список пуст </span>}
        </div>
        <div className={S.additionForm}>
          <AddForm />
        </div>
      </div>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Frige);
