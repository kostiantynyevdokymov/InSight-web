import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Window, Title } from './modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  //add navigation to reg

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

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Window>{children}</Window>
    </Backdrop>,
    modalRoot
  );
}
