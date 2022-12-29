import { BurgerModal, Menu, LinkContainer, StyledNavLink } from './BurgerModal.styled';

export const BurgerMenu = ({ active, setActive }) => {
  return (
    <BurgerModal className={active ? 'active' : ''}>
      <Menu>
        <LinkContainer>
          <StyledNavLink to={'diary'}>DIARY</StyledNavLink>
          <StyledNavLink to={'calculator'}>CALCULATOR</StyledNavLink>
        </LinkContainer>
      </Menu>
    </BurgerModal>
  );
};
