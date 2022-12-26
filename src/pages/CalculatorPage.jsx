import { SideBar } from 'components/SideBar/SideBar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { CaloriesIntake } from 'components/CaloriesIntake/CaloriesIntake';
import { useSelector } from 'react-redux';
import { selectDiet, selectUserIsLoggedIn } from 'redux/selectors';
import { NavHeader } from 'components/NavHeader/NavHeader';
import { AuthHeader } from 'components/AuthHeader/AuthHeader';

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const diet = useSelector(selectDiet);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <LeftSection>
        <CalculatorCalorieForm modal={modalHandler} />
      </LeftSection>
      {isLoggedIn && <SideBar />}
      {isOpen && diet && (
        <Modal onClose={modalHandler}>
          {isLoggedIn ? <NavHeader /> : <AuthHeader />}
          <CaloriesIntake diet={diet} />
        </Modal>
      )}
    </Container>
  );
};

export default Calculator;
