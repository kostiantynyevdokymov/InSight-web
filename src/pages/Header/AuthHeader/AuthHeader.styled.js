import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../components/Common/Theme';

export const HeaderContainer = styled.div`
  border-bottom: ${theme.border.header};
  padding-bottom: ${theme.spacing[3]}px;
  padding-top: ${theme.spacing[4]}px;
  display: flex;
  @media screen and (min-width: 321px) {
    justify-content: right;
  }
  @media screen and (min-width: 769px) {
    justify-content: left;
    border: none;
  }
`;

export const LinkSignIn = styled(NavLink)`
  margin: ${theme.mp(0, 0, 3, 3)};
  color: ${theme.colors.text.defaultText};
  text-decoration: none;
  margin-left: auto;
  @media screen and (min-width: 769px) {
    margin-left: ${theme.spacing[3]}px;
    padding-left: ${theme.spacing[3]}px;
    border-left: ${theme.border.header};
  }
`;

export const LinkRegistration = styled(NavLink)`
  margin: ${theme.mp(0, 0, 3, 3)};
  color: ${theme.colors.text.mediumText};
  text-decoration: none;
  margin-right: ${theme.spacing[3]}px;
  @media screen and (min-width: 321px) {
    margin-right: ${theme.spacing[3]}px;
  }
`;
export const HamburgerMenu = styled.button`
  border: none;
  background-color: inherit;
  line-height: 20px;
  margin: ${theme.mp(0, 3, 0, 'auto')};
`;
