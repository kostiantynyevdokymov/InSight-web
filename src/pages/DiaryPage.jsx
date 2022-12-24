import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { Container, LeftSection } from './Styles/DiaryPage.styled';
import { ModalButton, Plus } from '../components/DiaryForm/Form.styled';
import { SideBar } from 'components/SideBar/SideBar';
import { Calendar } from '../components/Calendar/Calendar';
import { Form } from 'components/DiaryForm/Form';
import { DiryproductsList } from 'components/DiryProductsList/DiryProductsList';
import { Modal } from 'components/Modal/Modal';

import { deleteDiaryEntry } from 'redux/diary/diaryOperations';
import { selectDiary } from 'redux/selectors';

const DiaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { inputDiary } = useSelector(selectDiary);

  const params = useParams();
  const dispatch = useDispatch();

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

  const onRemoveItemHandler = id => {
    dispatch(deleteDiaryEntry({ day: params.day, id }));
  };

  const onModalClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <LeftSection>
        <Calendar screenWidth={width} />
        {width > 768 && <Form />}
        {inputDiary.length !== 0 && <DiryproductsList products={inputDiary} onClickItem={onRemoveItemHandler} />}
        {width < 768 && <ModalButton onClick={onModalClose}>{<Plus style={{ display: 'block' }}>+</Plus>}</ModalButton>}
        {isOpen && (
          <Modal onClose={onModalClose}>
            <Form onClick={onModalClose} />
          </Modal>
        )}
      </LeftSection>
      <SideBar />
    </Container>
  );
};

export default DiaryPage;
