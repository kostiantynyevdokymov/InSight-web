import React from 'react';
import { InputForm } from './InputForm.styled';

export const InputPassword = ({ onChange, value }) => (
  <InputForm
    autoComplete="current-password"
    type="password"
    name="password"
    required
    onChange={onChange}
    value={value}
    pattern='((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[~`!@#$%^&*()_\-+=:";/?.,<>[\]{}\\|])).{8,100}'
    title="Має містити принаймні одну цифру, одну велику та малу літеру та від 8 до 100 символів"
  />
);