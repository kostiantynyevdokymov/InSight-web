import { Outlet } from 'react-router';
import { AuthHeader } from 'components/Header/AuthLinks/AuthLinks';
import { LogoMain } from 'components/Logo/Logo';
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
        <LogoMain />
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
