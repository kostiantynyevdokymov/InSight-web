import {
  Exit,
  Name,
  Back,
  NavHeaderContainer,
  HamburgerMenu,
  LogoContainer,
  LinkDiary,
  LinkCalculator,
} from './NavHeader.styled';
import { TiArrowBack } from 'react-icons/ti';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/user/userOperations';
import { handleLogoutUser } from 'redux/user/userHandlers';
import { useNavigate } from 'react-router';
import { LogoMain } from 'components/Logo/Logo';
import { useMediaQuery } from 'react-responsive';
// import { useAuth } from 'hooks/useAuth';

export const NavHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <>
      {isMobile && (
        <>
          <LogoContainer>
            <LogoMain />
            <HamburgerMenu type="button">
              <GiHamburgerMenu size={20} />
            </HamburgerMenu>
          </LogoContainer>
          <NavHeaderContainer>
            <Back type="button" onClick={() => navigate(-1)}>
              <TiArrowBack size={20} />
            </Back>
            <Name type="button">Name</Name>
            <Exit type="button" onClick={() => dispatch(handleLogoutUser())}>
              Exit
            </Exit>
          </NavHeaderContainer>
        </>
      )}
      {isTablet && (
        <>
          <NavHeaderContainer>
            <LogoMain />
            <Name type="button">Name</Name>
            <Exit type="button" onClick={() => dispatch(logoutUser())}>
              Exit
            </Exit>
            <HamburgerMenu type="button">
              <GiHamburgerMenu size={20} />
            </HamburgerMenu>
          </NavHeaderContainer>
        </>
      )}
      {isDesktop && (
        <>
          <NavHeaderContainer>
            <LogoMain />

            <LinkDiary to={'diary'}>DIARY</LinkDiary>
            <LinkCalculator to={'calculator'}>CALCULATOR</LinkCalculator>
            <Name type="button">Name</Name>
            <Exit type="button" onClick={() => dispatch(logoutUser())}>
              Exit
            </Exit>
          </NavHeaderContainer>
        </>
      )}
    </>
  );
};
