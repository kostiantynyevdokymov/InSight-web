import { Back, NavHeaderContainer, HamburgerMenu, LogoContainer, LinkDiary, LinkCalculator } from './NavHeader.styled';
import { TiArrowBack } from 'react-icons/ti';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LogoMain } from 'components/Logo/Logo';
import { useMediaQuery } from 'react-responsive';
import { ExitButton } from 'components/Header/ExitButton/ExitButton';
import { NameButton } from 'components/Header/NameButton/NameButton';

export const NavHeader = ({ showButton, onButtonClick }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto' }}>
      {isMobile && (
        <>
          <LogoContainer>
            <LogoMain />
            <HamburgerMenu type="button">
              <GiHamburgerMenu size={20} />
            </HamburgerMenu>
          </LogoContainer>
          <NavHeaderContainer>
            {showButton && (
              <Back type="button" onClick={onButtonClick}>
                <TiArrowBack size={20} />
              </Back>
            )}
            <NameButton />
            <ExitButton />
          </NavHeaderContainer>
        </>
      )}
      {isTablet && (
        <>
          <NavHeaderContainer>
            <LogoMain />
            <NameButton />
            <ExitButton />
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
            <NameButton />
            <ExitButton />
          </NavHeaderContainer>
        </>
      )}
    </div>
  );
};
