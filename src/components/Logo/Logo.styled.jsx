import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logo from '../../images/logo/logo.png';
import logoBig from '../../images/logo/logo@2x.png';
import slim from '../../images/logo/slim.png';
import mom from '../../images/logo/mom.png';

const heartBeat = keyframes`
  0% { transform: scale( .75 ); }
  20% { transform: scale( 1.1 ); }
  40% { transform: scale( .75 ); }
  60% { transform: scale( 1.1 ); }
  80% { transform: scale( .75 ); }
  100% { transform: scale( .75 ); }
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 20px 0px 16px 10px;

  @media only screen and (max-width: 400px) {
    display: none;
    padding: 20px 0 16px 20px;
  }

  @media only screen and (min-width: 1280px) {
    position: absolute;
    bottom: -15px;
    left: 51px;

    padding-right: 20px;
  }
`;

export const WrapperMobile = styled.div`
  display: flex;
  padding: 20px 0px 16px 10px;

  @media only screen and (min-width: 1280px) {
    position: absolute;
    bottom: -15px;
    left: 51px;

    padding-right: 20px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-right: 330px;
  }
  @media only screen and (min-width: 1280px) {
    position: relative;
    margin-right: 150px;
  }
`;

export const Logo = styled.div`
  min-width: 46.67px;
  min-height: 44px;
  background-image: url(${logo});
  background-size: cover;

  @media only screen and (min-width: 1280px) {
    min-height: 66px;
    min-width: 70px;
    background-image: url(${logoBig});
    animation: ${heartBeat} 4s;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoSlim = styled.span`
  width: 52.18px;
  height: 17.27px;
  background-image: url(${slim});
  background-size: cover;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoMom = styled.span`
  width: 59.18px;
  height: 17.27px;
  margin-left: 5.71px;
  background-image: url(${mom});
  background-size: cover;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
