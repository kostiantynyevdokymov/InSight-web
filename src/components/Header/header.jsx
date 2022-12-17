import { LinkRegistration, LinkSignIn, HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LinkSignIn href="/user/login">SIGN IN</LinkSignIn>
        <LinkRegistration href="/user">REGISTRATION</LinkRegistration>
      </HeaderContainer>
    </>
  );
};
