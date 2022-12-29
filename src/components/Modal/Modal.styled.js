import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';

export const Backdrop = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(33, 33, 33, 0.12);
  pointer-events: all;
`;

export const ModalViev = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 672px;
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (min-width: 767px) {
    width: ${p => (p.alert ? '300px' : '672px')};
    height: ${p => (p.alert ? '350px' : '572px')};
    flex-direction: column;
    align-items: center;
  } ;
`;

export const Close = styled(GrFormClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;

  &:hover {
    transform: scale(1.3);
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
