import { LinkRegistration, LinkLogo, LinkSignIn, HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LinkLogo href="/">sdad </LinkLogo>
        <LinkSignIn href="/user/login">SIGN IN</LinkSignIn>
        <LinkRegistration href="/user">REGISTRATION</LinkRegistration>
      </HeaderContainer>
    </>
  );
};
