import styled from 'styled-components';

export const InputForm = styled.input`
  width: 285px;
  height: 36px;
  border-bottom: ${p => p.theme.border.form};
  font-family: 'Verdana';
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.default};
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text.defaultText};
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;
