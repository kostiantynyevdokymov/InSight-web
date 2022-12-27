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
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  height: 100%;
  padding: ${p => p.theme.spacing[3]}px;
  justify-content: center;
  align-items: center;
`;

export const ExitModalText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;
