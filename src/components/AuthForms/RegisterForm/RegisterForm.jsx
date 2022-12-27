import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { constants } from 'constants';
import { registerUser } from 'redux/user/userOperations';
import { selectIsLoadingUser, selectErrorUser } from 'redux/user/userSelectors';
import { Link } from 'react-router-dom';
import {
  Registration,
  FormRegistration,
  StyledInputGroup,
  StyledTitleForm,
  StyledLabelInput,
  ButtonRegContainer,
  ButtonReg,
  ButtonLog,
  StyledError,
} from './RegisterForm.styled';

import { InputName } from 'components/AuthForms/InputFormValid/InputName';
import { InputMail } from 'components/AuthForms/InputFormValid/InputEmail';
import { InputPassword } from 'components/AuthForms/InputFormValid/InputPassword';
import { LoaderSmall } from 'components/Loader/LoaderSmall';
import { StyledAccentButton, StyledDefaultButton } from 'components/Common/FormComponents';
import { useEffect } from 'react';
import { GoogleLoginButton } from 'components/Common/GoogleButton';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialUser = { name: '', email: '', password: '' };
  const [user, setUser] = useState(initialUser);
  const [isError, setIsError] = useState(false);
  const isLoading = useSelector(selectIsLoadingUser);
  const userError = useSelector(selectErrorUser);
  const googleUrl = `${constants.apiServerAddress}/user/google`;

  const handleChange = e => {
    if (isError) setIsError(false);
    const newUserData = { ...user };
    newUserData[e.currentTarget.name] = e.currentTarget.value;
    setUser(newUserData);
  };

  const resetForm = () => {
    setUser({ ...user, password: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsError(false);
    dispatch(registerUser({ name: user.name, email: user.email, password: user.password }));
    resetForm();
  };

  useEffect(() => {
    if (!isLoading && userError) setIsError(true);
  }, [isLoading, user, userError]);

  return (
    <Registration>
      <StyledTitleForm>Register</StyledTitleForm>

      <FormRegistration onSubmit={handleSubmit}>
        <StyledInputGroup>
          <StyledLabelInput>
            Name *
            <InputName value={user.name} onChange={handleChange} />
          </StyledLabelInput>
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabelInput>
            E-mail *
            <InputMail value={user.email} onChange={handleChange} />
          </StyledLabelInput>
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabelInput>
            Password *
            <InputPassword value={user.password} onChange={handleChange} />
          </StyledLabelInput>
        </StyledInputGroup>

        {isError ? <StyledError>{userError}</StyledError> : null}

        <ButtonRegContainer>
          <ButtonReg>
            <StyledAccentButton type="submit" disabled={isLoading}>
              {isLoading ? <LoaderSmall /> : 'Register'}
            </StyledAccentButton>
          </ButtonReg>

          <ButtonLog>
            <Link to={'/login'}>
              <StyledDefaultButton type="button">Login</StyledDefaultButton>
            </Link>
          </ButtonLog>
        </ButtonRegContainer>

        <ButtonReg style={{ margin: 0, marginTop: 20 }}>
          <a href={googleUrl}>
            <GoogleLoginButton type="button">Google</GoogleLoginButton>
          </a>
        </ButtonReg>
      </FormRegistration>
    </Registration>
  );
};
