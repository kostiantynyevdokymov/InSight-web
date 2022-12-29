import React from 'react';
import { InputForm } from './InputForm.styled';

export const InputName = ({ onChange, value }) => (
  <InputForm
    autoComplete="name"
    type="text"
    name="name"
    pattern="^([a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*){3,200}$"
    title="Ім'я може містити лише літери, апостроф, тире та пробіли та бути від 3 до 200 символів"
    required
    onChange={onChange}
    value={value}
  />
);