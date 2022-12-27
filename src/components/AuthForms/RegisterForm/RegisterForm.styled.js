import styled from 'styled-components';

export const Registration = styled.div`
  padding-top: 40px;
  width: 280px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 160px;
    padding-left: 16px;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FormRegistration = styled.form`
  border: none;
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
  font-size: ${p => p.theme.fontSizes.default};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text.accentText};

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
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
  font-size: ${p => p.theme.fontSizes.default};
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text.mediumText};
`;

export const ButtonRegContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ButtonReg = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ButtonLog = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const AccentButton = styled.button`
  height: 44px;
  width: 182px;
  color: ${p => p.theme.button.accentButton.text};
  border: ${p => p.theme.button.accentButton.border};
  background-color: ${p => p.theme.button.accentButton.background};
  box-shadow: ${p => p.theme.button.shadow.default};
  border-radius: 30px;
`;

export const DefaultButton = styled.button`
  height: 44px;
  width: 182px;
  color: ${p => p.theme.button.defaultButton.text};
  border: ${p => p.theme.button.defaultButton.border};
  background-color: ${p => p.theme.button.defaultButton.background};
  box-shadow: none;
  border-radius: 30px;
`;

export const StyledError = styled.div`
  color: #e11616;
`;