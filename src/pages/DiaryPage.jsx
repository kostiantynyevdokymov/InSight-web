import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';

import { Container, EmptyList, LeftSection } from './Styles/DiaryPage.styled';
import { ModalButton, Plus } from '../components/DiaryForm/Form.styled';
import { SideBar } from 'components/SideBar/SideBar';
import { Calendar } from '../components/Calendar/Calendar';
import { Form } from 'components/DiaryForm/Form';
import { DiryproductList } from 'components/DiryProductsList/DiryProductList';
import { Modal } from 'components/Modal/Modal';

import { deleteDiaryEntry } from 'redux/diary/diaryOperations';
import { selectDiary, selectIsLoadingDiary, selectUserIsLoggedIn } from 'redux/selectors';
import { NavHeader } from 'components/Header/NavHeader/NavHeader';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { LoaderSmall } from 'components/Loader/LoaderSmall';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const { inputDiary } = useSelector(selectDiary);
  const globalModal = useSelector(state => state.modal.isOpen);
  const isLoading = useSelector(selectIsLoadingDiary);
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

  const onRemoveItemHandler = id => {
    const date = params.day.split('.').join('');
    dispatch(deleteDiaryEntry({ day: date, id }));
  };

  const onModalClose = () => {
    setIsOpen(!isOpen);
  };

  return isLoggedIn ? (
    <Container>
      {!globalModal ? (
        <>
          <LeftSection>
            <Calendar screenWidth={width} />
            {width > 768 && <Form />}
            {inputDiary.length !== 0 ? (
              <DiryproductList products={inputDiary} onClickItem={onRemoveItemHandler} />
            ) : (
              <EmptyList>{isLoading ? <LoaderSmall /> : <h3>No products added</h3>}</EmptyList>
            )}
            {width < 768 && (
              <ModalButton onClick={onModalClose}>{<Plus style={{ display: 'block' }}>+</Plus>}</ModalButton>
            )}
            {isOpen && width < 768 && (
              <Modal onClose={onModalClose}>
                <NavHeader showButton={isOpen} onButtonClick={onModalClose} />
                <Form onClick={onModalClose} />
              </Modal>
            )}
          </LeftSection>
          <SideBar />
        </>
      ) : (
        <BurgerMenu />
      )}
    </Container>
  ) : (
    <Navigate to="/login" />
  );
};

export default DiaryPage;
