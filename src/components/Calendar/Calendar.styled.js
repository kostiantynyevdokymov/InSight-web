import { theme } from 'components/Common/Theme';
import styled from 'styled-components';
import { ReactComponent as Calendar } from '../../images/icons/Calendar.svg';

export const Block = styled.div`
  display: flex;
  align-items: center;
`;

export const DateText = styled.h2`
  font-size: ${p => p.theme.fontSizes.s};
  margin-right: ${p => p.theme.mp(3)};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Icon = styled(Calendar)`
  cursor: pointer;
  & path {
    fill: ${p => p.theme.colors.text.mediumText};
  }
  &:hover path {
    fill: ${p => p.theme.colors.text.accentText};
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => theme.colors.modalBackdropColor};
`;

export const CalendarBox = styled.div`
  margin: 20px;
`;
