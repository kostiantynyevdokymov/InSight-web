import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { Section, Container, List, Title, Item, Text } from './SideBar.styled';
import { NotRecomendedFoodList } from './NotRecomendedFoodList/NotRecomendedFoodList';

import { selectDiary, selectDiet, selectUserIsLoggedIn, selectUserParams } from 'redux/selectors';
import { fetchUserDiet } from 'redux/diet/dietOperations';

export const SideBar = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const params = useParams();

  const { inputDiary } = useSelector(selectDiary);
  const diet = useSelector(selectDiet);
  const userParams = useSelector(selectUserParams);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  const onShowClick = () => {
    setShow(!show);
  };

  const consumed = inputDiary.reduce((prev, item) => {
    if (!isNaN(item.calories)) {
      return prev + parseInt(item.calories);
    }
    return prev + item.calories;
  }, 0);

  const left = diet.dailyCalories - consumed;
  const percent = Math.ceil((consumed / diet.dailyCalories) * 100);

  return (
    <Section>
      <Container>
        <List>
          <Title>Summary for {params.day}</Title>
          <Item>
            <Text>Daily rate</Text>
            <Text>{String(diet.dailyCalories).padStart(3, '0')} kcal</Text>
          </Item>
          <Item>
            <Text>Consumed</Text>
            <Text>{String(consumed).padStart(3, '0')} kcal</Text>
          </Item>
          <Item>
            <Text>Left</Text>
            <Text>{left < 0 ? '- - -' : String(left).padStart(3, '0')} kcal</Text>
          </Item>
          <Item>
            <Text>&#37; of total consumed</Text>
            {diet.dailyCalories ? (
              <Text>{String(percent > 100 ? 100 : percent).padStart(2, '0')} &#37;</Text>
            ) : (
              <Text>0 &#37;</Text>
            )}
          </Item>
        </List>
        <List>
          <Title>Food not recommended</Title>
          {diet.stopProducts.length !== 0 ? (
            <NotRecomendedFoodList show={show} products={diet.stopProducts} onClick={onShowClick} />
          ) : (
            <Item style={{ display: 'block' }}>
              <Text>Your diet will be displayed here</Text>
            </Item>
          )}
        </List>
      </Container>
    </Section>
  );
};
