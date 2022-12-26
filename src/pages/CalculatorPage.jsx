import { SideBar } from 'components/SideBar/SideBar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { CaloriesIntake } from 'components/CaloriesIntake/CaloriesIntake';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiet, selectParams, selectUserIsLoggedIn } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchUserDiet } from 'redux/diet/dietOperations';
import { refreshUser } from 'redux/user/userOperations';

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const diet = useSelector(selectDiet);
  const userparams = useSelector(selectParams);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  console.log('calc', isLoggedIn);
  console.log('calcParam', userparams);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(refreshUser());
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && userparams) {
      const { _id, ...param } = userparams;
      dispatch(fetchUserDiet(param));
    }
  }, [dispatch, isLoggedIn, userparams]);

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
          <CaloriesIntake diet={diet} />
        </Modal>
      )}
    </Container>
  );
};

export default Calculator;
