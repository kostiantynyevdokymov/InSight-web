// import { useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { LoginForm } from 'components/LoginForm/LoginForm';

import { Wrapper, Layer, Leaves, Banana, Strawberry } from 'components/MainPage/MainPageStyled';

const MainPageSelector = () => {
  const { isLoggedin } = useAuth();

  return (
    <Wrapper>
      {isLoggedin ? 'calculator' : <LoginForm />}
      <Strawberry />
      <Banana />
      <Leaves />
      <Layer />
    </Wrapper>
  );
};

export default MainPageSelector;
