import styled from 'styled-components';
import React from 'react';
import layer from '../../images/orig/Vector 3.png';
import leaves from '../../images/orig/leaves.png';
import banana from '../../images/orig/banana.png';
import strawberry from '../../images/orig/Strawberry.png';

export const Strawberry = () => {
  const StrawberryStyled = styled.img`
    position: absolute;
    z-index: 4;
    //in figma shedow 10px 20px 50px ??
    filter: drop-shadow(10px 20px 10px rgba(0, 0, 0, 0.3));
    transform: matrix(-1, 0, 0, 1, 0, 0);

    @media (max-width: 1280px) {
      width: 208px;
      height: 203px;
      left: 464px;
      top: 583px;
    }

    @media (min-width: 1280px) {
      width: 286px;
      height: 279px;
      left: 944px;
      top: 506px;
    }
  `;
  return <StrawberryStyled src={strawberry} alt="strawberry" />;
};

export const Banana = () => {
  const BananaStyled = styled.img`
    position: absolute;
    z-index: 3;

    @media (max-width: 1280px) {
      width: 740px;
      height: 527px;
      left: 247px;
      top: 596px;
    }

    @media (min-width: 1280px) {
      width: 773px;
      height: 552px;
      left: 782px;
      top: -102px;
    }
  `;
  return <BananaStyled src={banana} alt="banana" />;
};

export const Layer = () => {
  const LayerStyled = styled.img`
    position: absolute;
    z-index: 1;

    @media (max-width: 1280px) {
      width: 553px;
      height: 750px;
      left: 247px;
      top: 461px;
    }

    @media (min-width: 1280px) {
      width: 602.01px;
      height: 816px;
      left: 677.99px;
      top: 34px;
    }
  `;
  return <LayerStyled src={layer} alt="layer" />;
};

export const Leaves = () => {
  const LeavesStyled = styled.img`
    position: absolute;
    z-index: 2;

    @media (max-width: 1280px) {
      width: 531px;
      height: 602px;
      top: 463px; //in figma 493 ??
      left: 40px;

      transform: rotate(90deg);
    }

    @media (min-width: 1280px) {
      width: 746px;
      height: 846px;
      left: 323px;
      top: -26px;
    }
  `;
  return <LeavesStyled src={leaves} alt="leaves" />;
};

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  border: 1px solid green;
  margin: 100px;
  @media (max-width: 1200px) {
    width: 768px;
    height: 1024px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    height: 850px;
    background-color: ${p => p.theme.colors.background.pageBackground};

    margin-top: 20px;
    margin-left: 20px;
  }
`;
