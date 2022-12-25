import { useSelector } from 'react-redux';

import { MainHeader } from 'components/MainHeader/MainHeader';
import { Outlet } from 'react-router-dom';
import { HeaderBar, HeaderBarIsLogedIn } from '../../pages/Styles/SharedLayout.styled';
import { selectUserIsLoggedIn } from 'redux/selectors';
// import { Container, Wrapper } from 'pages/Styles/Background.styled';
import MainPageSelector from 'components/MainPage/MainPageSelector';
// import { MainPageHeaderStyled } from 'components/MainPage/MainPageStyled';
// import { NavHeader } from 'components/NavHeader/NavHeader';
// import { AuthHeader } from 'components/AuthHeader/AuthHeader';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <HeaderBarIsLogedIn>
          <MainHeader />
          <Outlet />
        </HeaderBarIsLogedIn>
      ) : (
        <MainPageSelector />
      )}
    </>
  );
};
