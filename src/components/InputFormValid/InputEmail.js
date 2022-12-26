import React from 'react';
import { InputForm } from './InputForm.styled';
import PropTypes from 'prop-types';

export const InputMail = ({ onChange, value }) => (
  <InputForm
    autoComplete="email"
    type="email"
    name="email"
    required
    onChange={onChange}
    value={value}
  />
);