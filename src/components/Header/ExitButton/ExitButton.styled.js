import styled from 'styled-components';

export const Exit = styled.button`
  padding-left: ${p => p.theme.spacing[3]}px;
  margin-right: ${p => p.theme.spacing[3]}px;
  background: none;
  border: none;
  border-left: ${p => p.theme.border.header};
  color: ${p => p.theme.colors.text.mediumText};
  cursor: pointer;
  :hover {
    color: ${p => p.theme.colors.text.accentText};
  }
`;

export const ExitModalThumb = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: ${p => p.theme.spacing[6]}px;
  justify-content: center;
  align-items: center;
`;

export const ExitModalText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;
