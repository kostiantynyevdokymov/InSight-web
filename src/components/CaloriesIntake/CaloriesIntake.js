import { NotRecomendedFoodList } from 'components/SideBar/NotRecomendedFoodList/NotRecomendedFoodList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectUserIsLoggedIn } from 'redux/selectors';
import { Container, Title, Calories, List, HeaderBlock, Kcal, Text, Button } from './CaloriesIntake.styled';

export const CaloriesIntake = ({ diet }) => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  const onShowClick = () => {
    setShow(!show);
  };

  const onStartLoosingClick = () => {
    if (!isLoggedIn) navigate('/register');
    else navigate('/diary');
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
      <Button onClick={onStartLoosingClick}>Start losing weight</Button>
    </Container>
  );
};
