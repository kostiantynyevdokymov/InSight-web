import styled from 'styled-components';

export const Block = styled.div``;

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
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${p => p.theme.mp(4)};
  padding-bottom: ${p => p.theme.mp(4)};

  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.mp(5)};
    padding-bottom: ${p => p.theme.mp(5)};
  }

  @media screen and (min-width: 1280px) {
    padding-top: ${p => p.theme.mp(6)};
    padding-bottom: ${p => p.theme.mp(6)};
    max-width: 670px;
  }
`;

export const EmptyList = styled.div`
  padding-left: ${p => p.theme.spacing[3]}px;
  padding-right: ${p => p.theme.spacing[3]}px;

  @media screen and (max-width: 768px) {
    padding-bottom: ${p => p.theme.spacing[4]}px;
  }
  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.spacing[4]}px;
    padding-right: ${p => p.theme.spacing[4]}px;
  }
  @media screen and (min-width: 1280px) {
    max-height: 270px;
    padding-left: ${p => p.theme.spacing[3]}px;
    padding-right: ${p => p.theme.spacing[3]}px;
  }
`;
