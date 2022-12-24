import styled from 'styled-components';
import { theme } from 'components/Common/Theme';

export const Login = styled.div` 
  padding-top: 56px;
  width: 280px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 160px;
    padding-left: 32px;
    margin-left: 0;
    margin-right: 0;

    @media screen and (min-width: 1280px) {
      padding-left: 16px;
      margin-left: 0;
      margin-right: 0;
    }
`;

export const FormLogin = styled.form`
  border: none;
  background-color: transparent;
  margin-top: 55px;
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
  font-size: ${theme.fontSizes.default};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.accentText};

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

export const StyledLabelInput = styled.label`
  padding-bottom: 20px;
  font-family: 'Verdana';
  font-style: normal;
  font-size: ${theme.fontSizes.default};
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.mediumText};
`;

export const InputForm = styled.input`
  width: 280px;
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
  @media screen and (min-width: 768px) {
    width: 240px;
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
  color: ${theme.button.accentButton.text};
  border: ${theme.button.accentButton.border};
  background-color: ${theme.button.accentButton.background};
  box-shadow: ${theme.button.shadow.default};
  border-radius: 30px;
`;

export const DefaultButton = styled.button`
  color: ${theme.button.defaultButton.text};
  border: ${theme.button.defaultButton.border};
  background-color: ${theme.button.defaultButton.background};
  box-shadow: none;
  border-radius: 30px;
`;