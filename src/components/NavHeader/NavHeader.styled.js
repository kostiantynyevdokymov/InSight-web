import styled from 'styled-components';
import { theme } from 'components/Common/Theme';

export const NavHeaderContainer = styled.div`
  height: 40px;
  text-align: end;

  @media screen and (max-width: 767px) {
    background: ${theme.colors.background.greyBackground};
    padding-left: ${p => p.theme.spacing[3]}px;
    padding-right: ${p => p.theme.spacing[3]}px;
  }
`;
export const Exit = styled.button`
  padding-left: ${p => p.theme.spacing[3]}px;
  height: 32px;
  background: none;
  border: none;
  border-left: ${theme.border.header};
`;
export const Name = styled.button`
  padding-right: ${p => p.theme.spacing[3]}px;
  height: 32px;
  border: none;
  background: none;
`;
export const Back = styled.button`
  border: none;
  background-color: inherit;
`;
