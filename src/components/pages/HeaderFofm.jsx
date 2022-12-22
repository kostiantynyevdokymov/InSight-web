import styled from 'styled-components';

export const Header = () => {
  const HeaderStyled = styled.div`
    width: 100%;
    height: 146px;
    border: 1px solid green;
  `;
  return <HeaderStyled>Heder</HeaderStyled>;
};

export const FormDialy = () => {
  const HeaderStyled = styled.div`
    position: absolute;
    width: 608px;
    height: 450px;
    border: 1px solid green;
    top: calc(100% / 2.9);
    left: 16px;
  `;
  return <HeaderStyled>Dialy form</HeaderStyled>;
};
