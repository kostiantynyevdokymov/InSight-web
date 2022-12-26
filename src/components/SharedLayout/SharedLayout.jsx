import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { MainHeader } from 'components/MainHeader/MainHeader';
import { HeaderBarIsLogedIn } from './SharedLayout.styled';
import { selectUserIsLoggedIn } from 'redux/selectors';
import MainPageSelector from 'components/MainPage/MainPageSelector';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

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
