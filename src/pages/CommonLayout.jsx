import { HeaderContainer } from 'components/AuthHeader/AuthHeader.styled';
import { NavHeader } from 'components/NavHeader/NavHeader';
const { AuthHeader } = require('components/AuthHeader/AuthHeader');
export const CommonLayout = () => {
  return (
    <HeaderContainer>
      <AuthHeader />
      <NavHeader />
    </HeaderContainer>
  );
};

export default CommonLayout;
