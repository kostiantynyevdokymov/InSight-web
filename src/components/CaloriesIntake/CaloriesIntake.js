import { Container, Title, Calories, List, Item, Text } from './CaloriesIntake.styled';

export const CaloriesIntake = ({ diet }) => {
  return (
    <Container>
      <Title> Your recommended daily calorie intake is</Title>
      <Calories>
        {diet.dailyIntake} <span>kcal</span>
      </Calories>
      <List>
        <h3>Foods you should not eat</h3>
        {diet.stopProd.map(it => (
          <Item>
            <Text></Text>
          </Item>
        ))}
      </List>
    </Container>
  );
};
