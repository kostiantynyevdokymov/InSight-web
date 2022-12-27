import { LinkSignIn, LinkRegistration, HeaderContainer } from './AuthLinks.styled';

export const AuthHeader = () => {
  return (
    <HeaderContainer>
      <LinkSignIn to={'login'}>SIGN IN</LinkSignIn>
      <LinkRegistration to={'register'}>REGISTRATION</LinkRegistration>
    </HeaderContainer>
  );
};
