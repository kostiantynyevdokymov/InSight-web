import { NavHeader } from 'pages/Header/NavHeader/NavHeader';
import { AuthHeader } from 'pages/Header/AuthHeader/AuthHeader';
import { HeaderContainer } from './SharedLayout.styled';
import { useSelector } from 'react-redux';
import { LogoMain } from 'components/Logo/Logo';

const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth);
  return (
    <>
      <HeaderContainer>
        <LogoMain />
        {isLoggedIn ? <NavHeader /> : <AuthHeader />}
      </HeaderContainer>
    </>
  );
};

export default SharedLayout;
