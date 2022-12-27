import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  padding-bottom: ${p => p.theme.spacing[3]}px;
  padding-top: ${p => p.theme.spacing[4]}px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 320px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1280px) {
    border-bottom: none;
    align-items: flex-end;
  }
`;
export const LinkSignIn = styled(NavLink)`
  margin: ${p => p.theme.mp(0, 0, 0, 3)};
  color: ${p => p.theme.colors.text.defaultText};
  text-decoration: none;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    margin-left: ${p => p.theme.spacing[3]}px;
    padding-left: ${p => p.theme.spacing[3]}px;
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
