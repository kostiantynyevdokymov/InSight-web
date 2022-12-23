import { Exit, Name, Back, NavHeaderContainer } from './NavHeader.styled';
import { HamburgerMenu } from '../AuthHeader/AuthHeader.styled';
import { TiArrowBack } from 'react-icons/ti';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from 'hooks/useAuth';

export const NavHeader = () => {
  // const { name } = useAuth();
  return (
    <>
      <HamburgerMenu type="button">
        <GiHamburgerMenu size={18} />
      </HamburgerMenu>
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
