import styled from 'styled-components';

export const UlDairy = styled.ul`
  height: 244px;
  overflow-y: scroll;
  @media screen and (min-width: 1280px) {
    height: 270px;
  }
`;

export const DairyProdLi = styled.li`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  gap: 8px;
  & * {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: ${p => p.theme.spacing[1]}px;
    align-self: flex-end;
    font-weight: ${p => p.theme.fontWeights.normal};
    //display: flex;
  }

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing[2]}px;
  }
  @media screen and (min-width: 768px) {
    gap: 46px;
  }
  @media screen and (min-width: 1280px) {
    & * {
      padding-bottom: ${p => p.theme.spacing[3]}px;
      padding-top: ${p => p.theme.spacing[2]}px;
    }
  }
`;

export const TitleDairy = styled.div`
  text-align: left;
`;

export const WeightDairy = styled.div`
  text-align: right;
`;

export const CalDairy = styled.div`
  text-align: right;
`;

export const ButtonX = styled.button`
  display: block;
  background: transparent;
  border: none;
  width: 10px;
  color: ${p => p.theme.colors.text.mediumText};
`;
