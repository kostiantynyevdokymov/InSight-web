import { SideBar } from 'components/SideBar/SideBar';
import { Calendar } from '../../components/Calendar/Calendar';
import { Container } from './DiaryPage.styled';

export const DiaryPage = () => {
  return (
    <Container>
      <Calendar />
      <SideBar />
    </Container>
  );
};
