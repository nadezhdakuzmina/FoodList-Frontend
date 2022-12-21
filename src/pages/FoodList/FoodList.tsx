import { FC } from 'react';
import { connect } from 'react-redux';

import { checkItemResolver, removeItemResolver } from '@data/actions/foodList/resolvers';

import Container from '@containers/Container';
import PageTitle from '@components/PageTitle';
import FoodListItem from './components/FoodListItem';
import AddForm from './components/AddForm';

import S from './FoodList.scss';

import type { State } from '@root/data/types';
import { FoodListItemProps } from './types';

const mapDispatchToProps = (dispatch) => ({
  removeFoodListItem: (id: number) => dispatch(removeItemResolver(id)),
  checkFoodListItem: (id: number, status: boolean) => dispatch(checkItemResolver(id, status)),
});

const mapStateToProps = (state: State) => ({
  foodList: state.foodList.items,
});

const FoodList: FC<FoodListItemProps> = ({ foodList, checkFoodListItem, removeFoodListItem }) => {
  const sortedList = foodList.sort(({ isChecked: a }, { isChecked: b }) => {
    return Number(a) - Number(b);
  });

  return (
    <Container className={S.root}>
      <PageTitle>Список покупок</PageTitle>
      <div className={S.contentWrapper}>
        <div className={S.foodList}>
          {sortedList.map((item) => (
            <FoodListItem
              key={item.id}
              onCheck={checkFoodListItem}
              onRemove={removeFoodListItem}
              {...item}
            />
          ))}
        </div>
        <div className={S.additionForm}>
          <AddForm />
        </div>
      </div>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
