import { SideBar } from 'components/SideBar/SideBar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { useAuth } from 'hooks/useAuth';

const Calculator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <LeftSection>
        <CalculatorCalorieForm />
      </LeftSection>
      {isLoggedIn && <SideBar />}
    </Container>
  );
};

export default Calculator;
