import styled from 'styled-components';

export const Registration = styled.div`
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
`;

export const StyledLabelInput = styled.label`
  font-family: 'Verdana';
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.default};
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.color.text.mediumText};
`;

export const InputForm = styled.input`
  width: 285px;
  height: 77px;
  border-bottom: ${p => p.theme.border.form};
  font-family: 'Verdana';
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.default};
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.color.text.defaultText};

   @media screen and (min-width: 768px) {
    width: 240px;
    height: 76px;
  }
`;

export const ButtonReg = styled.div`
  width: 182px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
}
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const ButtonLog = styled.div`
  width: 184px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;

   @media screen and (min-width: 768px) {
    display: inline-block;
    margin-left: 32px;
  }
`;

export const AccentButton = styled.button`
  color: ${p => p.theme.button.accentButton.text};
  border: ${p => p.theme.button.accentButton.border};
  background-color: ${p => p.theme.button.accentButton.background};
  box-shadow: ${p => p.theme.button.shadow.default};
  border-radius: 30px;
`;

export const DefaultButton = styled.button`
  color: ${p => p.theme.button.defaultButton.text};
  border: ${p => p.theme.button.defaultButton.border};
  background-color: ${p => p.theme.button.defaultButton.background};
  box-shadow: none;
  border-radius: 30px;
`;