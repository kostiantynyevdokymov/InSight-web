import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  padding-bottom: ${p => p.theme.mp(3)};
  padding-top: ${p => p.theme.mp(4)};
  display: flex;
  align-items: center;
  @media screen and (min-width: 320px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1280px) {
    padding-top: ${p => p.theme.mp(6)};
    align-items: flex-end;
  }
`;
export const LinkSignIn = styled(NavLink)`
  margin: ${p => p.theme.mp(0, 0, 0, 3)};
  color: ${p => p.theme.colors.text.defaultText};
  text-decoration: none;
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    margin-left: ${p => p.theme.mp(3)};
    padding-left: ${p => p.theme.mp(3)};
    border-left: ${p => p.theme.border.header};
  }
`;

export const LinkRegistration = styled(NavLink)`
  margin: ${p => p.theme.mp(0, 3, 0, 3)};
  color: ${p => p.theme.colors.text.mediumText};
  text-decoration: none;
  @media screen and (min-width: 320px) {
  }
`;
