import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from '../../redux/user/userSelectors';
import { Link, Wrapper, WrapperMobile, Logo, LogoSlim, LogoMom } from './Logo.styled';

export default function LogoMain() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return (
    <>
      <Link to="/">
        {isLoggedIn ? (
          <>
            <Logo />
            <WrapperMobile>
              <LogoSlim />
              <LogoMom />
            </WrapperMobile>
          </>
        ) : (
          <>
            <Logo />
            <Wrapper>
              <LogoSlim />
              <LogoMom />
            </Wrapper>
          </>
        )}
      </Link>
    </>
  );
}
