import styled from 'styled-components';

export const Exit = styled.button`
  padding-left: ${p => p.theme.spacing[3]}px;
  margin-right: ${p => p.theme.spacing[3]}px;
  background: none;
  border: none;
  border-left: ${p => p.theme.border.header};
  color: ${p => p.theme.colors.text.mediumText};
  cursor: pointer;
`;
