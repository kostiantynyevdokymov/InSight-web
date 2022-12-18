import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  border-bottom: ${p => p.theme.border.header};
  padding-top: ${p => p.theme.spacing[4]}px;
  display: flex;

  @media screen and (min-width: 769px) {
    padding-top: ${p => p.theme.spacing[6]}px;
  }
`;
export const InfoContainer = styled.div`
  background-color: ${p => p.theme.colors.background.greyBackground};
  padding: ${p => p.theme.spacing[3]}px;
`;
export const LinkSignIn = styled(NavLink)`
  margin: ${p => p.theme.mp(0, 3, 3, 2)};
  margin-left: auto;
  color: ${p => p.theme.colors.text.defaultText};
  text-decoration: none;
  @media screen and (min-width: 769px) {
    margin-left: ${p => p.theme.spacing[3]}px;
    padding-left: ${p => p.theme.spacing[3]}px;
    border-left: ${p => p.theme.border.header};
  }
`;
export const LinkRegistration = styled(NavLink)`
  margin: ${p => p.theme.mp(0, 3, 3, 2)};
  color: ${p => p.theme.colors.text.mediumText};
  text-decoration: none;
`;
