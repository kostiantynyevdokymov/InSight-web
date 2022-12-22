import styled from 'styled-components';

export const Registration = styled.div`
  width: 290px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: auto;
    padding-top: 154px;
    padding-left: 77px;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: 1280px) {
    width: auto;
    padding-top: 187px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FormRegistration = styled.form`
  margin-top: 60px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    width: 239px;
  }
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
  position: relative;
`

