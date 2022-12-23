import React, { useState } from 'react';
import { Section, Container, List, Title, Item, Text, ShowMore } from './SideBar.styled';
//
// Testing data ----------------
//
const eatedProducts = [
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
];

//
// Testing data ----------------
//

export const SideBar = ({ diet }) => {
  const [show, setShow] = useState();

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

  const left = eatedProducts.reduce((prev, item) => {
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
