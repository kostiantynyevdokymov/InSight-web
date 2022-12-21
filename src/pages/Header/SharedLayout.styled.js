import styled from 'styled-components';
import { theme } from 'components/Common/Theme';

export const HeaderContainer = styled.div`
  @media screen and (min-width: 321px) {
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 769px) {
    padding-top: ${theme.spacing[5]}px;
  }
`;
