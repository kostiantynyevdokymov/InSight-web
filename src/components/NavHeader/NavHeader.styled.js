import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavHeaderContainer = styled.nav`
  text-align: end;
  display: flex;
  border-bottom: ${p=>p.theme.border.header};
  height: 40px;
  @media screen and (max-width: 767px) {
    background: ${p=>p.theme.colors.background.greyBackground};
  }
  @media screen and (min-width: 768px) {
    padding: ${p=>p.theme.mp(3, 0, 3, 0)};
  }
  @media screen and (min-width: 1280px) {
    border-bottom: none;
    align-items: flex-end;
    padding: ${p=>p.theme.mp(6, 0, 3, 0)};
  } ;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkDiary = styled(NavLink)`
  margin: ${p=>p.theme.mp(0, 0, 0, 3)};
  color: ${p=>p.theme.colors.text.defaultText};
  text-decoration: none;
  margin-left: auto;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    margin-left: ${p=>p.theme.spacing[3]}px;
    padding-left: ${p=>p.theme.spacing[3]}px;
    border-left: ${p=>p.theme.border.header};
  }
`;
export const LinkCalculator = styled(NavLink)`
  margin: ${p=>p.theme.mp(0, 3, 0, 3)};
  color: ${p=>p.theme.colors.text.mediumText};
  text-decoration: none;
`;
export const HamburgerMenu = styled.button`
  display: block;
  border: none;
  background-color: inherit;
  margin: ${p=>p.theme.mp(0, 3, 0, 'auto')};
  @media screen and (min-width: 768px) {
    margin: ${p=>p.theme.mp(0, 3, 0, 0)};
  }
`;
export const Back = styled.button`
  display: block;
  border: none;
  background-color: inherit;
  margin-right: auto;
  margin-left: ${p=>p.theme.spacing[3]}px;
`;
