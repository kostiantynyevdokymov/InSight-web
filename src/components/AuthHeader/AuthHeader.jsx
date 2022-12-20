import { LinkSignIn, LinkRegistration } from './AuthHeader.styled';

export const AuthHeader = () => {
  return (
    <nav>
      <LinkSignIn to="/InSight-web/user/login">SIGN IN</LinkSignIn>
      <LinkRegistration to="/InSight-web/user">REGISTRATION</LinkRegistration>
    </nav>
  );
};
