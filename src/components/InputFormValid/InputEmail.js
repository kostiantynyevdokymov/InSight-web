import React from 'react';
import { InputForm } from './InputForm.styled';
import PropTypes from 'prop-types';

export const InputMail = ({ onChange, value }) => (
  <InputForm
    type="email"
    name="email"
    required
    onChange={onChange}
    value={value}
  />
);

InputMail.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};