import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { closeModal } from 'redux/services/ModalSlice';
import { Container, Diary, Calculator } from './BurgerMenu.styled';

export const BurgerMenu = () => {
  const url = window.location.href.split('/').pop();
  const { isOpen } = useSelector(state => state.modal);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = e => {
    if (e.target.innerText === 'DIARY') {
      navigate('/diary');
      dispatch(closeModal());
      return;
    }
    navigate('/calculator');
    dispatch(closeModal());
  };

  return (
    <Container>
      {!url ? (
        <Diary onClick={handleClick} active>
          DIARY
        </Diary>
      ) : (
        <Diary onClick={handleClick}>DIARY</Diary>
      )}
      {url === 'calculator' ? (
        <Calculator onClick={handleClick} active>
          CALCULATOR
        </Calculator>
      ) : (
        <Calculator onClick={handleClick}>CALCULATOR</Calculator>
      )}
    </Container>
  );
};
