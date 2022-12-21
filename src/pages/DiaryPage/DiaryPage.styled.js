import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(to right, white 760px, ${p => p.theme.colors.background.greyBackground} 760px 1280px);
  }
`;
