import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutUser } from 'redux/user/userOperations';
import { resetDailyDiary } from 'redux/diary/diarySlice';
import { Exit, ExitModalThumb, ExitModalText } from './ExitButton.styled';
import { StyledAccentButton } from 'components/Common/FormComponents';
import { Modal } from 'components/Modal/Modal';

export const ExitButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const ExitHandler = () => {
    dispatch(resetDailyDiary());
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <>
      <Exit type="button" onClick={modalHandler}>
        Exit
      </Exit>
      {isModalOpen && (
        <Modal onClose={modalHandler}>
          <ExitModalThumb>
            <ExitModalText>Are you sure?</ExitModalText>
            <StyledAccentButton onClick={ExitHandler}>Yes, I want to exit!</StyledAccentButton>
            <StyledAccentButton onClick={modalHandler}>No, go back!</StyledAccentButton>
          </ExitModalThumb>
        </Modal>
      )}
    </>
  );
};
