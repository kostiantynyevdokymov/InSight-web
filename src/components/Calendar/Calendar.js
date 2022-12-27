import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import DatePicker from 'react-datepicker';

import { Block, CalendarBox, DateText, Icon, Modal } from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker.css';

import { getDailyDiary, resetDailyDiary } from 'redux/diary/diaryOperations';

export const Calendar = ({ screenWidth }) => {
  const [choseDate, setChoseDate] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDownEsc);
      return () => {
        window.removeEventListener('keydown', handleKeyDownEsc);
      };
    }
  });

  useEffect(() => {
    if (!choseDate) {
      if (params.day && validateDay(params.day)) {
        let date = params.day.split('.');
        date[1] -= 1;
        const searchingDate = new Date(date[2], date[1], date[0]);
        setChoseDate(searchingDate);
        return;
      }
      setChoseDate(new Date());
      return;
    }

    const date = parseDay(choseDate);

    navigate({ pathname: `${date.day}.${date.month}.${date.year}` });
    dispatch(resetDailyDiary());
    dispatch(getDailyDiary(`${date.day}${date.month}${date.year}`));
  }, [choseDate, dispatch, navigate, params.day]);

  const parseDay = value => {
    const day = String(value.getDate()).padStart(2, '0');
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const year = String(value.getFullYear());

    return { day, month, year };
  };

  function validateDay(value) {
    let date = value.split('.');
    date[1] -= 1;
    let d = new Date(date[2], date[1], date[0]);
    if (d.getFullYear() === date[2] && d.getMonth() === date[1] && d.getDate() === date[0]) {
      return true;
    } else {
      return false;
    }
  }

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
