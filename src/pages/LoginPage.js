import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { Navigate, useSearchParams } from 'react-router-dom';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const [searchParams] = useSearchParams();
  const retPath = searchParams.get('retPath') || '/';

  return isLoggedIn ? <Navigate to={`/${retPath}`} /> : <LoginForm />;
};

export default LoginPage;
