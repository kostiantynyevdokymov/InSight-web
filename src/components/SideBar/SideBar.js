import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

//                     // це поки що для тестыв
//---------------------------------------------------------------------
import axios from 'axios';
//---------------------------------------------------------------------

import { Section, Container, List, Title, Item, Text } from './SideBar.styled';
import { NotRecomendedFoodList } from './NotRecomendedFoodList/NotRecomendedFoodList';

import { selectDiary } from 'redux/selectors';

const initState = { dailyCalories: 0, stopProducts: [] };

const person = { height: 176, age: 28, currentWeight: 70, desireWeight: 80, bloodType: 1 };

export const SideBar = () => {
  const [show, setShow] = useState();
  const params = useParams();

  //                     // це поки що для тестыв
  //---------------------------------------------------------------------
  const [diet, setDiet] = useState(initState);
  //---------------------------------------------------------------------

  const { inputDiary } = useSelector(selectDiary);

  //                     // це поки що для тестыв
  //---------------------------------------------------------------------
  useEffect(() => {
    getDiet();
  }, []);

  const getDiet = async () => {
    try {
      const resp = await axios.post('/diet', person);
      setDiet({ dailyCalories: resp.data.dailyIntake, stopProducts: resp.data.stopProd });
    } catch (error) {
      console.log('ERROR:', error);
    }
  };
  //---------------------------------------------------------------------

  function uniqueCategories(arr) {
    let result = [];
    let temp = [];

    for (let item of arr) {
      if (!temp.includes(item.categories[0])) {
        temp.push(item.categories[0]);
        result.push(item);
      }
    }
    return result;
  }

  const notRecomendedFood = uniqueCategories(diet.stopProducts);

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

  return (
    <Section>
      <Container>
        <List>
          <Title>Summary for {params.day}</Title>
          <Item>
            <Text>Left</Text>
            <Text>{left} kcal</Text>
          </Item>
          <Item>
            <Text>Consumed</Text>
            <Text>{consumed} kcal</Text>
          </Item>
          <Item>
            <Text>Daily rate</Text>
            <Text>{diet.dailyCalories} kcal</Text>
          </Item>
          <Item>
            <Text>&#37; of total</Text>
            <Text>{Math.ceil((consumed / diet.dailyCalories) * 100)} &#37;</Text>
          </Item>
        </List>
        <List>
          <Title>Food not recommended</Title>
          {notRecomendedFood.length !== 0 ? (
            <NotRecomendedFoodList show={show} forbidenFood={notRecomendedFood} onClick={onShowClick} />
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
