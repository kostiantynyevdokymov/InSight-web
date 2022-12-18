import React from 'react';
import StyledInput from 'Common/FormComponents';
import PropTypes from 'prop-types';

export const InputPassword = ({ onChange, value }) => (
    <StyledInput
      type="password"
      name="password"
      required
      placeholder="Enter password"
      onChange={onChange}
      value={value}
      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
      title="Має містити принаймні одну цифру, одну велику та малу літеру та принаймні 6 або більше символів"
    />
  );

  InputPassword.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };