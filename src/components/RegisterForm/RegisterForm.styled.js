import styled from 'styled-components';

export const Registration = styled.div`
  width: 285px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    width: auto;
    padding-top: 160px;
    padding-left: 16px;
    margin-left: 0;
    margin-right: 0;
`;

export const FormRegistration = styled.form`
  border: none;
  `;

export const StyledTitleForm = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Verdana';
  font-style: normal;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.default};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.color.text.accentText};

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const StyledLabelInput = styled.label`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.color.text.accentText};
  color: #9B9FAA;
`

