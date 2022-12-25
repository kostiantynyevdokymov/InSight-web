import styled from 'styled-components';

export const DairyInput = styled.input`
  display: flex;
  outline: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: ${p => p.theme.spacing[1]}px;
  @media screen and (min-width: 768px) {
      align-content: center;
      margin-bottom: 0;
     padding-bottom: ${p => p.theme.spacing[3]}px;
      align-self: flex-end;
    }
  }
`;
