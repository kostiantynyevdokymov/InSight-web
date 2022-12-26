import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { Navigate, useParams } from 'react-router';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const { retPath } = useParams() || '/';

  return isLoggedIn ? <Navigate to={`/${retPath}`} /> : <LoginForm />;
};

export default LoginPage;
