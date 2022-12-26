import { constants } from 'constants';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();

  const url = `${constants.apiServerAddress}/user/google`;

  return !isLoggedIn ? (
    <>
      <LoginForm />
      <br />
      <a href={url}>Google</a>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default LoginPage;
