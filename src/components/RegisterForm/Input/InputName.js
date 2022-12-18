import React from 'react';
import StyledInput from 'Common/FormComponents';
import PropTypes from 'prop-types';

export const InputName = ({ onChange, value }) => (
  <StyledInput
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Назва може містити лише літери, апостроф, тире та пробіли"
    required
    placeholder="Enter name"
    onChange={onChange}
    value={value}
  />
);

InputName.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};