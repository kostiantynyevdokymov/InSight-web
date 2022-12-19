import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Block, DateText, Icon, Modal } from './Calendar.styled';

export const Calendar = () => {
  const [choseDate, setChoseDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
    }
    window.addEventListener('keydown', hendleKeyDownEsc);
    return () => {
      window.removeEventListener('keydown', hendleKeyDownEsc);
    };
  }, [isOpen]);

  const handleChoseDate = e => {
    setIsOpen(!isOpen);
    setChoseDate(e);
  };

  const hendleKeyDownEsc = e => {
    if (e.code === 'Escape') {
      setIsOpen(!isOpen);
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
  };

  //   if (isOpen) {
  //     window.addEventListener('keydown', hendleKeyDownEsc);
  //   } else {
  //     window.removeEventListener('keydown', hendleKeyDownEsc);
  //   }

  return (
    <Block>
      {choseDate && <DateText> {choseDate.toLocaleDateString()}</DateText>}
      <Icon onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <Modal onClick={handleBackdropClick}>
          <DatePicker selected={choseDate} onChange={handleChoseDate} inline />
        </Modal>
      )}
    </Block>
  );
};
