import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutUser } from 'redux/user/userOperations';
import { Exit } from './ExitButton.styled';

export const ExitButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onExitClick = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  return (
    <Exit type="button" onClick={onExitClick}>
      Exit
    </Exit>
  );
};
