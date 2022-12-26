import styled from 'styled-components';
import { theme } from 'components/Common/Theme';

export const Login = styled.div`
  padding-top: 38px;
  width: 280px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 160px;
    padding-left: 32px;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FormLogin = styled.form`
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
  font-size: ${theme.fontSizes.default};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.accentText};

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
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const ButtonLogContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ButtonReg = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const ButtonLog = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
