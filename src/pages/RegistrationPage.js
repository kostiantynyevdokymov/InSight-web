import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/useAuth';
import { Navigate, useParams } from 'react-router-dom';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const { retPath } = useParams() || '/';

  return isLoggedIn ? <Navigate to={`/${retPath}`} /> : <RegisterForm />;
};

export default LoginPage;
