import styled from 'styled-components';

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.mp(5)};
  background: ${p => p.theme.colors.background.secondBackground};
  max-width: 480px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-top: 100px};
  }
`;

export const Diary = styled.button`
  border: none;
  background-color: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  padding-bottom: ${p => p.theme.mp(3)};
  color: ${p => (p.active ? '#9B9FAA' : '#FFF')};
`;

export const Calculator = styled(Diary)``;
