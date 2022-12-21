import styled from 'styled-components';
import { theme } from 'components/Common/Theme';

export const HeaderContainer = styled.div`
  @media screen and (min-width: 321px) {
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: end;
    border-bottom: ${theme.border.header};
  }

  @media screen and (min-width: 769px) {
    padding-top: ${theme.spacing[5]}px;
    border: none;
    justify-content: space-between;
  }
`;
