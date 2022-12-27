import { StyledDefaultButton } from 'components/Common/FormComponents';
import styled from 'styled-components';
import googleIcon from '../../images/google.png';

export const GoogleLoginButton = styled(StyledDefaultButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    display: block;

    position: absolute;
    top: center;
    left: 20px;
    width: 35px;
    height: 35px;

    background: url(${googleIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;
