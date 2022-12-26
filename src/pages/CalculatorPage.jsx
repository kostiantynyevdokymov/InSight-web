import { SideBar } from 'components/SideBar/SideBar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { CaloriesIntake } from 'components/CaloriesIntake/CaloriesIntake';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiet } from 'redux/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/user/userOperations';

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const diet = useSelector(selectDiet);

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <LeftSection>
        <CalculatorCalorieForm modal={modalHandler} />
      </LeftSection>
      <SideBar />
      {isOpen && diet && (
        <Modal onClose={modalHandler}>
          <CaloriesIntake diet={diet} />
        </Modal>
      )}
    </Container>
  );
};

export default Calculator;
