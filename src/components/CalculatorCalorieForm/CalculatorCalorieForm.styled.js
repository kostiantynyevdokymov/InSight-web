import styled from 'styled-components';
import { Form, Field, ErrorMessage} from 'formik';

const Title = styled.h2`
  margin-bottom: 40px;
  font-family: Verdana;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 18px;
  line-height: 26px;
  color: #212121;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 34px;
    line-height: 41px;
  }
`;
const FormikForm = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  margin-bottom: 10px;
  padding: ${p => p.theme.mp(3)};
  box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.9);
  background-color: rgba(255, 255, 255, 0.9);

  @media screen and (min-width: 768px) {
    margin: 0;
    max-width: 605px;
    padding-left: ${p => p.theme.mp(4)};
    padding-right: ${p => p.theme.mp(4)};
  }
  @media screen and (min-width: 1280px) {
    padding-left: ${p => p.theme.mp(3)};
    padding-right: ${p => p.theme.mp(3)};
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;
const InputBlock = styled.div`
  width: 240px;

  @media screen and (min-width: 768px) {
    width: 50%;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;
const Label = styled.label`
  position: relative;
`;
const Button = styled.button`
  padding: 13px 0;
  display: block;
  width: 210px;
  border: 2px solid #fc842d;
  border-radius: 30px;
  background-color: #fc842d;
  color: #ffffff;
  font-weight: 700;
  font-family: Verdana;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  letter-spacing: 0.04em;
  outline: none;
  margin: 0 auto;

  &:hover {
    background-color: #fc842d;
    color: #ffffff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-left: auto;
  }
`;

const RadioGroupContainer = styled.div`
  position: relative;
`;
const RadioTitle = styled.p`
  margin: 0;
  margin-bottom: 14px;
  left: 0;
  top: -20px;
  padding: 0;
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;
const RadioError = styled.div`
  width: 300px;
  position: absolute;
  top: 58px;
  left: 0;
  color: #e11616;
  font-size: 15px;
`;
const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RadioLabel = styled.label`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: normal;
  color: #9b9faa;
`;
const RadioField = styled(Field)`
  display: none !important;
  *display: inline;
  & + label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 30px;
    margin-right: 15px;
    font-size: 14px;
  }
  & + label:before {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    margin-right: 14px;
    position: absolute;
    top: -3px;
    left: -1px;
    border: 1px solid #aaa;
    background-color: #fff;
    border-radius: 50%;
  }
  &:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 14%;
    left: 14%;

    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fc842d;
  }
`;
const Error = styled(ErrorMessage)`
  width: 300px;
  position: absolute;
  top: 22px;
  left: 0;
  color: #e11616;
  font-size: 11px;
`;

const LabelValue = styled.p`
  position: absolute;
  left: 0;
  top: -28px;

  padding: 0;
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #9b9faa;

  transition: 0.3s;
`;
const InputField = styled(Field)`
  margin-bottom: ${p => p.isError ? '50px' : '40px'};
  width: 240px;
  border: 0;
  border-bottom: ${p => p.isError ? '1px solid #e11616' : '1px solid #e0e0e0'};
  background-color: ${p => p.isError ? '#e1161613' : 'inherit'};
  &:focus {
    outline: none;
  }
  & {
    -moz-appearance: textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const SC = {
  Title,
  FormikForm,
  InputWrapper,
  InputBlock,
  Label,
  Button,
  RadioGroupContainer,
  RadioTitle,
  RadioError,
  RadioWrapper,
  RadioLabel,
  RadioField,
  Error,
  LabelValue,
  InputField,
};

export default SC;
