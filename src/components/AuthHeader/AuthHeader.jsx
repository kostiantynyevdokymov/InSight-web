import { LinkSignIn, LinkRegistration, HeaderContainer, Aaa } from './AuthHeader.styled';
import { LogoMain } from 'components/Logo/Logo';

export const AuthHeader = () => {
  return (
    <HeaderContainer>
      <LogoMain />
      <Aaa>
        <LinkSignIn to={'login'}>SIGN IN</LinkSignIn>
        <LinkRegistration to={'register'}>REGISTRATION</LinkRegistration>
      </Aaa>
    </HeaderContainer>
  );
};
