import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &: not(: last-child) {
    padding-bottom: ${p => p.theme.mp(3)};
  } ;
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text.mediumText};
`;

export const ShowMore = styled.a`
  cursor: pointer;
`;
