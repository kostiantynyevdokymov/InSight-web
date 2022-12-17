import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
`;
export const LinkSignIn = styled.a`
  margin-left: auto;
  color: ${p => p.theme.colors.text.defaultText};
  @media screen and (min-width: 321px) {
  } ;
`;
export const LinkRegistration = styled.a`
  margin: ${p => p.theme.mp(0, 3, 3, 2)};
  color: ${p => p.theme.colors.text.mediumText};
`;
