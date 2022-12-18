import React from 'react';
import StyledInput from 'Common/FormComponents';
import PropTypes from 'prop-types';

export const InputMail = ({ onChange, value }) => (
    <StyledInput
    type="email"
    name="email"
    required
    placeholder="Enter e-mail"
    onChange={onChange}
    value={value} 
    />      
);

InputMail.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};