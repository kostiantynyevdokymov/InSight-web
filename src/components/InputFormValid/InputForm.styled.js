import styled from 'styled-components';
import { theme } from 'components/Common/Theme';

export const InputForm = styled.input`
  width: 285px;
  height: 36px;
  border-bottom: ${theme.border.form};
  font-family: 'Verdana';
  font-style: normal;
  font-size: ${theme.fontSizes.default};
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.text.defaultText};
  border: none;
  border-bottom: 1px solid #E0E0E0;
   background-color: transparent;

   @media screen and (min-width: 768px) {
    width: 240px;
  }
`;