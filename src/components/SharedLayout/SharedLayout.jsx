import { LinkRegistration, LinkSignIn, HeaderContainer, InfoContainer } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.user.auth.isOAuth2);
  return (
    <>
      <HeaderContainer>
        {isLoggedIn ? (
          <div>=</div>
        ) : (
          <>
            <div>logo</div>

            <LinkSignIn to="/user/login">SIGN IN</LinkSignIn>
            <LinkRegistration to="/user">REGISTRATION</LinkRegistration>
          </>
        )}
      </HeaderContainer>
      {isLoggedIn && <InfoContainer></InfoContainer>}
      <Outlet />
    </>
  );
};
