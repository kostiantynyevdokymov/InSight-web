import { NotRecomendedFoodList } from 'components/SideBar/NotRecomendedFoodList/NotRecomendedFoodList';
import { useState } from 'react';
import { Container, Title, Calories, List, HeaderBlock, Kcal, Text, Button } from './CaloriesIntake.styled';

export const CaloriesIntake = ({ diet }) => {
  const [show, setShow] = useState(false);

  const onShowClick = () => {
    setShow(!show);
  };

  return (
    <Container>
      <HeaderBlock>
        <Title> Your recommended daily calorie intake is</Title>
        <Calories>
          {diet.dailyCalories} <Kcal>kcal</Kcal>
        </Calories>
      </HeaderBlock>
      <List>
        <Text>Foods you should not eat</Text>
        {diet.stopProducts.length !== 0 && (
          <NotRecomendedFoodList products={diet.stopProducts} show={show} onClick={onShowClick} />
        )}
      </List>
      <Button>Start losing weight</Button>
    </Container>
  );
};
