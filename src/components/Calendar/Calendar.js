import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import DatePicker from 'react-datepicker';

import { Block, CalendarBox, DateText, Icon, Modal } from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker.css';

import { getDailyDiary, resetDailyDiary } from 'redux/diary/diaryOperations';

export const Calendar = ({ screenWidth }) => {
  const [choseDate, setChoseDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDownEsc);
      return () => {
        window.removeEventListener('keydown', handleKeyDownEsc);
      };
    }
  });

  useEffect(() => {
    // const dayParam = choseDate.toLocaleDateString().split('.').join('');
    let day = choseDate.getDate();
    let month = choseDate.getMonth() + 1;
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    const year = choseDate.getFullYear();

    navigate({ pathname: `${day}.${month}.${year}` });
    dispatch(resetDailyDiary());
    dispatch(getDailyDiary(`${day}${month}${year}`));
  }, [choseDate]);

  const handleChoseDate = e => {
    setChoseDate(e);
    setIsOpen(!isOpen);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
  };
  const handleKeyDownEsc = e => {
    if (e.code === 'Escape') {
      setIsOpen(!isOpen);
    }
  };

  const BlockCalendar = () => {
    if (screenWidth > 767) {
      return (
        <CalendarBox>
          <DatePicker selected={choseDate} onChange={handleChoseDate} inline />
        </CalendarBox>
      );
    }
    return (
      <Modal onClick={handleBackdropClick}>
        <DatePicker selected={choseDate} onChange={handleChoseDate} inline />
      </Modal>
    );
  };

  return (
    <Block>
      {choseDate && <DateText> {choseDate.toLocaleDateString()}</DateText>}
      <Icon onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <BlockCalendar />}
    </Block>
  );
};
