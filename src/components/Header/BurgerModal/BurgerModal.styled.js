import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BurgerModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 80px;
  left: 0;
  z-index: 1000;
  transform: translate(-100%);

  &:active {
    transform: translate(0%);
  }

  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    top: 85px;
  }
`;

export const Menu = styled.div`
  background-color: #264061;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
`;

export const LinkContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #969faa;
  &.active {
    color: #fff;
  }
`;
