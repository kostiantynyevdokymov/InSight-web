import { useSelector } from 'react-redux';

import { MainHeader } from 'components/MainHeader/MainHeader';
import { Outlet } from 'react-router-dom';
import { HeaderBar, HeaderBarIsLogedIn } from '../../pages/Styles/SharedLayout.styled';
import { selectUserIsLoggedIn } from 'redux/selectors';
import { Container, Wrapper } from 'pages/Styles/Background.styled';

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
        <HeaderBar>
          <Container>
            <Wrapper>
              <MainHeader />
              <Outlet />
            </Wrapper>
          </Container>
        </HeaderBar>
      )}
    </>
  );
};
