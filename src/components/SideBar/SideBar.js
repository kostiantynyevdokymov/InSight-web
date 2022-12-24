import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

//                     // це поки що для тестыв
//---------------------------------------------------------------------
import axios from 'axios';
//---------------------------------------------------------------------

import { Section, Container, List, Title, Item, Text, ShowMore } from './SideBar.styled';
import { selectDiary } from 'redux/selectors';

const initState = { dailyCalories: 0, stopProducts: [] };

const person = { height: 176, age: 28, currentWeight: 70, desireWeight: 80, bloodType: 1 };

export const SideBar = () => {
  const [show, setShow] = useState();
  //                     // це поки що для тестыв
  //---------------------------------------------------------------------
  const [diet, setDiet] = useState(initState);
  //---------------------------------------------------------------------

  const { inputDiary } = useSelector(selectDiary);

  useEffect(() => {
    getDiet();
  }, []);

  //                     // це поки що для тестыв
  //---------------------------------------------------------------------
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

  const left = inputDiary.reduce((prev, item) => {
    if (!isNaN(item.calories)) {
      return prev + parseInt(item.calories);
    }
    return prev + item.calories;
  }, 0);

  const consumed = diet.dailyCalories - left;

  const FullList = arr => {
    if (show) {
      return arr.map(it => (
        <Item key={it._id.$oid} style={{ display: 'block' }}>
          <Text>{it.categories[0]}</Text>
        </Item>
      ));
    } else
      return (
        <>
          {notRecomendedFood.slice(0, 4).map(it => (
            <Item key={it._id.$oid} style={{ display: 'block' }}>
              <Text>{it.categories[0]}</Text>
            </Item>
          ))}
          {notRecomendedFood.length > 4 && (
            <ShowMore href="#" onClick={() => setShow(!show)}>
              show more ...
            </ShowMore>
          )}
        </>
      );
  };
  return (
    <Section>
      <Container>
        <List>
          <Title>Summary for 20/06/2020</Title>
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
            <Text>n% of normal</Text>
            <Text>{Math.ceil((consumed / diet.dailyCalories) * 100)} &#37;</Text>
          </Item>
        </List>
        <List>
          <Title>Food not recommended</Title>
          {notRecomendedFood.length !== 0 ? (
            FullList(notRecomendedFood)
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
