import { StyledAccentButton } from 'components/Common/FormComponents';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: ${p => p.theme.spacing[5]}px;
  padding-left: ${p => p.theme.spacing[3]}px;
  padding-right: ${p => p.theme.spacing[3]}px;

  @media screen and (max-width: 768px) {
    padding-top: ${p => p.theme.spacing[5]}px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    justify-content: flex-end;
    padding-bottom: ${p => p.theme.spacing[5]}px;
    padding-left: ${p => p.theme.spacing[4]}px;
    padding-right: ${p => p.theme.spacing[4]}px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: ${p => p.theme.spacing[5]}px;
    padding-left: ${p => p.theme.spacing[3]}px;
    padding-right: ${p => p.theme.spacing[3]}px;
  }
`;

export const SForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 285px;

  @media screen and (min-width: 768px) {
    margin: 0;
    flex-direction: row;
    width: 610px;
    align-items: end;
  }
`;

export const ProductBlock = styled.div`
  position: relative;
  margin-bottom: 30px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: ${p => p.theme.spacing[4]}px;
  }
`;

export const AutocompleteList = styled.ul`
  position: absolute;
  width: 85%;
  background: ${p => p.theme.colors.background.pageBackground};
  max-height: 240px;
  height: auto;
  overflow-y: auto;
  padding: ${p => p.theme.spacing[2]}px;
`;

export const AutocompleteItems = styled.li`
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text.mediumText};
  padding-bottom: ${p => p.theme.spacing[1]}px;

  &:hover {
    background: ${p => p.theme.colors.background.greyBackground};
    cursor: pointer;
    transition: cubic-bezier(1, 0, 0, 1) 0.3s all;
  }
`;

export const ButtonDairy = styled(StyledAccentButton)`
  margin-top: ${p => p.theme.spacing[5]}px;
  margin-left: auto;
  margin-right: auto;
  width: 176px;
  height: 44px;
  border-radius: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: auto;
    height: 48px;
    width: 48px;
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const ModalButton = styled(ButtonDairy)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: ${p => p.theme.radii.round};
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Plus = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Add = styled.span`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
