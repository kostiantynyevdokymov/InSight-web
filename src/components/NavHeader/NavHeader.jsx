import { useAuth } from 'hooks/useAuth';
import { Exit, Name, NavHeaderContainer } from './NavHeader.styled';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/user/userOperations';

export const NavHeader = () => {
  const dispatch = useDispatch();
  const { name } = useAuth();

  return (
    <>
      <NavHeaderContainer>
        <Name type="button">Hello {name}</Name>
        <Exit
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Exit
        </Exit>
      </NavHeaderContainer>
    </>
  );
};
