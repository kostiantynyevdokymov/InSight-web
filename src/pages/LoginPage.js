import { constants } from 'constants';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container } from './Styles/LoginPage.styled';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  if (isLoggedIn) navigate('/');

  const url = `${constants.apiServerAddress}/user/google`;

  return (
    !isLoggedIn && (
      <Container>
        <Wrapper>
          <LoginForm />
          <br />
          <a href={url}>Google</a>
        </Wrapper>
      </Container>
    )
  );
};

export default LoginPage;
