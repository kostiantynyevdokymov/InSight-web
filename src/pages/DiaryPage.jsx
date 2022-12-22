import { useEffect, useState } from 'react';
import { DairyForm } from 'components/DiaryForm/DairyForm';
import { SideBar } from 'components/SideBar/SideBar';
import { Calendar } from '../components/Calendar/Calendar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';

const DiaryPage = () => {
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

  return (
    <Container>
      <LeftSection>
        <Calendar screenWidth={width} />
        <DairyForm screenWidth={width} />
      </LeftSection>
      <SideBar />
    </Container>
  );
};

export default DiaryPage;
