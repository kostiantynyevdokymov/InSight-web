import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container } from './Styles/LoginPage.styled';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  console.log({ isLoggedIn });

  if (isLoggedIn) navigate('/');

  return (
    <Container>
      <Wrapper>
        <RegisterForm />
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
