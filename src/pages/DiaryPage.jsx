import { useEffect, useState } from 'react';
import { DairyForm } from 'components/DiaryForm/DairyForm';
import { SideBar } from 'components/SideBar/SideBar';
import { Calendar } from '../components/Calendar/Calendar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';
import axios from 'axios';

const initState = { dailyCalories: 0, stopProducts: [] };

const person = { height: 176, age: 28, currentWeight: 70, desireWeight: 80, bloodType: 1 };

const DiaryPage = () => {
  const [diet, setDiet] = useState(initState);

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

  useEffect(() => {
    getDiet();
  }, []);

  const getDiet = async () => {
    try {
      const resp = await axios.post('/diet', person);
      setDiet({ dailyCalories: resp.data.dailyIntake, stopProducts: resp.data.stopProd });
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  return (
    <Container>
      <LeftSection>
        <Calendar screenWidth={width} />
        <DairyForm screenWidth={width} />
      </LeftSection>
      <SideBar diet={diet} />
    </Container>
  );
};

export default DiaryPage;
