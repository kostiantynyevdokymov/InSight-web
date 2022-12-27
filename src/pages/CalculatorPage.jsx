import { SideBar } from 'components/SideBar/SideBar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { useState, useEffect } from 'react';
import { Modal } from 'components/Modal/Modal';
import { CaloriesIntake } from 'components/CaloriesIntake/CaloriesIntake';
import { useSelector } from 'react-redux';
import { selectDiet, selectUserIsLoggedIn } from 'redux/selectors';
import { NavHeader } from 'components/Header/NavHeader/NavHeader';
import { AuthHeader } from 'components/Header/AuthLinks/AuthLinks';

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const diet = useSelector(selectDiet);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth;
  };

  const width = useWindowWidth();

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
          {isLoggedIn && width < 768 ? <NavHeader /> : <AuthHeader />}
          <CaloriesIntake diet={diet} />
        </Modal>
      )}
    </Container>
  );
};

export default Calculator;
