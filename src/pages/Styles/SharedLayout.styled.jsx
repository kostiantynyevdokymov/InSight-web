import styled from 'styled-components';

export const HeaderBarIsLogedIn = styled.div`
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    background: linear-gradient(to right, white 760px, ${p => p.theme.colors.background.greyBackground} 760px 1280px);
    margin-left: auto;
    margin-right: auto;
  }
`;
