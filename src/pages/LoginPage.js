import { LoginForm } from 'components/AuthForms/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';
import { selectUserIsLoggedIn } from 'redux/selectors';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const [searchParams] = useSearchParams();
  const retPath = searchParams.get('retPath') || '/';

  return isLoggedIn ? <Navigate to={`/${retPath}`} /> : <LoginForm />;
};

export default LoginPage;
