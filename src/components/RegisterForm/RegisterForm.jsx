import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/user/userOperations';
import { selectIsLoadingUser } from 'redux/user/userSelectors';
import { Loader } from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import {
  Registration,
  FormRegistration,
  StyledInputGroup,
  StyledTitleForm,
  StyledLabelInput,
  ButtonRegContainer,
  ButtonReg,
  AccentButton,
  ButtonLog,
  DefaultButton,
} from './RegisterForm.styled';

import { InputName } from 'components/InputFormValid/InputName';
import { InputMail } from 'components/InputFormValid/InputEmail';
import { InputPassword } from 'components/InputFormValid/InputPassword';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialUser = { name: '', email: '', password: '' };
  const [user, setUser] = useState(initialUser);
  const isLoading = useSelector(selectIsLoadingUser);

  const handleChange = e => {
    const newUserData = { ...user };
    newUserData[e.currentTarget.name] = e.currentTarget.value;
    setUser(newUserData);
  };

  const resetForm = () => {
    setUser(initialUser);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    resetForm();
  };

  const { name, email, password } = user;

  return (
    <Registration>
      <StyledTitleForm>Register</StyledTitleForm>

      <FormRegistration onSubmit={handleSubmit}>
        <StyledInputGroup>
          <StyledLabelInput>
            Name *
            <InputName value={name} onChange={handleChange} />
          </StyledLabelInput>
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabelInput>
            E-mail *
            <InputMail value={email} onChange={handleChange} />
          </StyledLabelInput>
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabelInput>
            Password *
            <InputPassword value={password} onChange={handleChange} />
          </StyledLabelInput>
        </StyledInputGroup>

        <ButtonRegContainer>
          <ButtonReg>
            <AccentButton type="submit" disabled={isLoading}>
              {isLoading ? <Loader ariaLabel="loader-spinner" visible={true} /> : 'Register'}
            </AccentButton>
          </ButtonReg>

          <ButtonLog>
            <Link to={'/login'}>
              <DefaultButton type="button">Login</DefaultButton>
            </Link>
          </ButtonLog>
        </ButtonRegContainer>
      </FormRegistration>
    </Registration>
  );
};
