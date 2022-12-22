import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import registerUser from 'redax/user/userOperations';
import { StyledAccentButton, StyledDefaultButton } from 'Common/FormComponents';
import { StyledForm, StyledLabel, StyledTitleForm } from 'Common/FormComponents';
import InputName from './Input/InputName';
import InputEmail from './Input/InputEmail';
import InputPassword from './Input/InputPassword';
import selectIsLoading from 'redux/user/userSelectors';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(selectIsLoading);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser.register({ name, email, password }));
    resetForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitleForm>Register</StyledTitleForm>
      <StyledInputGroup>
        <StyledLabel>
          <p>Name *</p>
          <InputName value={name} onChange={handleChange} type="name" name="name" />
        </StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel>
          <p>E-mail *</p>
          <InputEmail value={email} onChange={handleChange} type="email" name="email" />
        </StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel>
          <p>Password *</p>
          <InputPassword value={password} onChange={handleChange} type="password" name="password" />
        </StyledLabel>
      </StyledInputGroup>
      <RegisterButtonReg>
        <StyledAccentButton
        type="submit"
        disabled={isLoading}
      >
        { isLoading ? (
          <Loader
            ariaLabel='loader-spinner'
            visible={true}
          />
        ) : (
           'Register'
          )}
      </StyledAccentButton>
      </RegisterButtonReg>    

      <RegisterButtonLog>
        <Link to="/login">
          <StyledDefaultButton type="button">Log in</StyledDefaultButton>
        </Link>
      </RegisterButtonLog>
    </StyledForm>
  );
};
