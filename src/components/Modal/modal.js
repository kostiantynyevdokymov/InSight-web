import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalViev } from './modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const hadleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', hadleKeyDown);

    return () => {
      window.removeEventListener('keydown', hadleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      <ModalViev>{children}</ModalViev>
    </Backdrop>,
    modalRoot
  );
};
