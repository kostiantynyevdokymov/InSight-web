import { AuthLink, HeaderContainer } from './AuthLinks.styled';

export const AuthHeader = () => {
  return (
    <HeaderContainer>
      <AuthLink to={'login'}>SIGN IN</AuthLink>
      <AuthLink to={'register'}>REGISTRATION</AuthLink>
    </HeaderContainer>
  );
};
