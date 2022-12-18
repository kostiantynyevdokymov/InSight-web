import styled from 'styled-components';
import React from 'react';
import layer from '../../images/homeWeb/Vector 3.png';
import layerTab from '../../images/homeWeb/Vector 3tab.png';
import leaves from '../../images/homeWeb/Layer-4 1.png';
import leavesTab from '../../images/homeWeb/Layer-4 2tab.png';
import banana from '../../images/homeWeb/Layer-9.png';
import bananaTab from '../../images/homeWeb/Layer-9tab.png';
import strawberry from '../../images/homeWeb/Strawberry-Big-PNG.png';
import strawberryTab from '../../images/homeWeb/Strawberry-Big-PNGtab.png';

export const Strawberry = () => {
  const StrawberryStyled = styled.img`
    position: absolute;
    z-index: 4;

    @media (max-width: 1280px) {
      margin-left: 464px;
      margin-top: 583px;
    }

    @media (min-width: 1280px) {
      margin-top: 506px;
      margin-left: 958px;
    }
  `;
  return <StrawberryStyled src={window.innerWidth > 1280 ? strawberry : strawberryTab} alt="strawberry" />;
};

export const Banana = () => {
  const BananaStyled = styled.img`
    position: absolute;
    z-index: 3;

    @media (max-width: 1280px) {
      margin-left: 247px;
      margin-top: 596px;
    }

    @media (min-width: 1280px) {
      margin-left: 782px;
    }
  `;
  return <BananaStyled src={window.innerWidth > 1280 ? banana : bananaTab} alt="banana" />;
};

export const Layer = () => {
  const LayerStyled = styled.img`
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1280px) {
      margin-left: 247px;
      margin-top: 461px;
    }

    @media screen and (min-width: 1280px) {
      margin-left: auto;
    }
  `;
  return <LayerStyled src={window.innerWidth > 1280 ? layer : layerTab} alt="layer" />;
};

export const Leaves = () => {
  const LeavesStyled = styled.img`
    position: absolute;
    z-index: 2;

    @media screen and (max-width: 1280px) {
      margin-top: 493px;
    }

    @media screen and (min-width: 1280px) {
      margin-left: 339px;
    }
  `;
  return <LeavesStyled src={window.innerWidth > 1280 ? leaves : leavesTab} alt="leaves" />;
};

export const Wrapper = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
    border: 1px solid green;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 850px;
    background-color: ${p => p.theme.colors.background.pageBackground};
    border: 1px solid green;

    margin-top: 20px;
    margin-left: 20px;
  }
`;
