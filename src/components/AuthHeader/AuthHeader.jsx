// import { LinkSignIn, LinkRegistration, HeaderContainer } from './AuthHeader.styled';
import { LinkSignIn, LinkRegistration, HamburgerMenu, HeaderContainer } from './AuthHeader.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
// import { selectUserIsLoggedIn } from 'redux/selectors';

export const AuthHeader = () => {
  // const isUserLoggedIn = useSelector(selectUserIsLoggedIn);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <HeaderContainer>
      {isLoggedIn ? (
        <HamburgerMenu type="button">
          <GiHamburgerMenu size={18} />
        </HamburgerMenu>
      ) : (
        <>
          <LinkSignIn to={'login'}>SIGN IN</LinkSignIn>
          <LinkRegistration to={'register'}>REGISTRATION</LinkRegistration>
        </>
      )}
    </HeaderContainer>
  );
};
