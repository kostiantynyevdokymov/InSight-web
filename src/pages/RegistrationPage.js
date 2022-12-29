import { RegisterForm } from 'components/AuthForms/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';
import { selectUserIsLoggedIn } from 'redux/selectors';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const [searchParams] = useSearchParams();
  const retPath = searchParams.get('retPath') || '/';

  return isLoggedIn ? <Navigate to={`/${retPath}`} /> : <RegisterForm />;
};

export default LoginPage;
