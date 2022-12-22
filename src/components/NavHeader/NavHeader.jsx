import { Exit, Name, Back, NavHeaderContainer } from './NavHeader.styled';
import { TiArrowBack } from 'react-icons/ti';
import { useAuth } from 'hooks/useAuth';

export const NavHeader = () => {
  const { name } = useAuth();
  return (
    <>
      <NavHeaderContainer>
        <Back type="button">
          <TiArrowBack size={20} />
        </Back>
        <Name type="button">Name</Name>
        <Exit type="button">Exit</Exit>
      </NavHeaderContainer>
    </>
  );
};
