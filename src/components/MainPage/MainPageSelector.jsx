import { Outlet } from 'react-router';
import { AuthHeader } from 'components/AuthHeader/AuthHeader';
import {
  Wrapper,
  Layer,
  Leaves,
  Banana,
  Strawberry,
  MainPageHeaderStyled,
  MainPageFormContainer,
} from 'components/MainPage/MainPageStyled';

const MainPageSelector = () => {
  return (
    <Wrapper>
      <MainPageHeaderStyled>
        <AuthHeader />
      </MainPageHeaderStyled>
      <MainPageFormContainer>
        <Outlet />
      </MainPageFormContainer>
      <Strawberry />
      <Banana />
      <Leaves />
      <Layer />
    </Wrapper>
  );
};

export default MainPageSelector;
