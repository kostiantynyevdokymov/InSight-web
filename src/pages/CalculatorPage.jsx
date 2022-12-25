import { SideBar } from 'components/SideBar/SideBar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { CaloriesIntake } from 'components/CaloriesIntake/CaloriesIntake';
import { useSelector } from 'react-redux';
import { selectDiet } from 'redux/selectors';

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const diet = useSelector(selectDiet);

  console.log('Diet:', diet);
  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <Container>
      <LeftSection>
        <CalculatorCalorieForm modal={modalHandler} />
      </LeftSection>
      <SideBar />
      {isOpen && (
        <Modal onClose={modalHandler}>
          <CaloriesIntake diet={diet} />
        </Modal>
      )}
    </Container>
  );
};

export default Calculator;
