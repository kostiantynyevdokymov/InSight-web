import styled from 'styled-components';

const BasicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: ${p => p.theme.mp(1)};
  padding: ${p => p.theme.mp(1, 3)};

  font-size: ${p => p.theme.fontSizes.default};

  outline: none;
  border-radius: ${p => p.theme.radii.large};

  transition: box-shadow ${p => p.theme.animation.fast};

  &:hover,
  &:focus {
    box-shadow: ${p => p.theme.button.shadow.hover};
  }

  &:active {
    box-shadow: ${p => p.theme.button.shadow.active};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: ${p => p.theme.mp(2, 4)};
  padding: ${p => p.theme.mp(2, 4)};

  border: none;
`;

export const StyledTitleForm = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Verdana';
  font-style: normal;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.default};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.color.text.accentText};

`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${p => p.theme.mp(2, 0, 1)};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledInput = styled.input`
  margin: ${p => p.theme.mp(0, 0, 0, 3)};
  padding: ${p => p.theme.mp(1, 2)};

  font-size: ${p => p.theme.fontSizes.default};
  font-weight: ${p => p.theme.fontWeights.normal};

  border: none;
  border-bottom: 1px solid #000000;
`;

export const StyledAccentButton = styled(BasicButton)`
  color: ${p => p.theme.button.accentButton.text};
  border: ${p => p.theme.button.accentButton.border};
  background-color: ${p => p.theme.button.accentButton.background};
  box-shadow: ${p => p.theme.button.shadow.default};
`;

export const StyledDefaultButton = styled(BasicButton)`
  color: ${p => p.theme.button.defaultButton.text};
  border: ${p => p.theme.button.defaultButton.border};
  background-color: ${p => p.theme.button.defaultButton.background};
  box-shadow: none;
`;
