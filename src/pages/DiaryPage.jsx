import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { Container, EmptyList, LeftSection } from './Styles/DiaryPage.styled';
import { ModalButton, Plus } from '../components/DiaryForm/Form.styled';
import { SideBar } from 'components/SideBar/SideBar';
import { Calendar } from '../components/Calendar/Calendar';
import { Form } from 'components/DiaryForm/Form';
import { DiryproductList } from 'components/DiryProductsList/DiryProductList';
import { Modal } from 'components/Modal/Modal';

import { deleteDiaryEntry } from 'redux/diary/diaryOperations';
import { selectDiary } from 'redux/selectors';

const DiaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { inputDiary } = useSelector(selectDiary);
  const dispatch = useDispatch();
  const params = useParams();

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
    const date = params.day.split('.').join('');
    dispatch(deleteDiaryEntry({ day: date, id }));
  };

  const onModalClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <LeftSection>
        <Calendar screenWidth={width} />
        {width > 768 && <Form />}
        {inputDiary.length !== 0 ? (
          <DiryproductList products={inputDiary} onClickItem={onRemoveItemHandler} />
        ) : (
          <EmptyList>
            <h3>Still did not added any products</h3>
          </EmptyList>
        )}
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
