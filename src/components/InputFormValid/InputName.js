import React from 'react';
import { InputForm } from './InputForm.styled';
import PropTypes from 'prop-types';

export const InputName = ({ onChange, value }) => (
  <InputForm
    autoComplete="name"
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Назва може містити лише літери, апостроф, тире та пробіли"
    required
    onChange={onChange}
    value={value}
  />
);