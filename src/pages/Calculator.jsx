import { SideBar } from 'components/SideBar/SideBar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';

const Calculator = () => {
  return (
    <Container>
      <LeftSection>
        <CalculatorCalorieForm />
      </LeftSection>
      <SideBar />
    </Container>
  );
};

export default Calculator;
