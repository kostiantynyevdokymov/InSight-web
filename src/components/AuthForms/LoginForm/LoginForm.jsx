import { useState } from 'react';
import { constants } from 'constants';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/user/userOperations';
import { selectIsLoadingUser, selectErrorUser } from 'redux/user/userSelectors';
import { Link } from 'react-router-dom';
import {
  Login,
  FormLogin,
  StyledInputGroup,
  StyledTitleForm,
  StyledLabelInput,
  ButtonLogContainer,
  ButtonReg,
  ButtonLog,
  StyledError,
} from './LoginForm.styled';

import { InputMail } from 'components/AuthForms/InputFormValid/InputEmail';
import { InputPassword } from 'components/AuthForms/InputFormValid/InputPassword';
import { LoaderSmall } from 'components/Loader/LoaderSmall';
import { StyledAccentButton, StyledDefaultButton } from 'components/Common/FormComponents';
import { useEffect } from 'react';
import { GoogleLoginButton } from 'components/Common/GoogleButton';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialUser = { email: '', password: '' };
  const [user, setUser] = useState(initialUser);
  const [isError, setIsError] = useState(false);
  const isLoading = useSelector(selectIsLoadingUser);
  const userError = useSelector(selectErrorUser);
  const googleUrl = `${constants.apiServerAddress}/user/google`;

  const resetForm = () => {
    setUser({ ...user, password: '' });
  };

  const handleChange = e => {
    if (isError) setIsError(false);
    const newUserData = { ...user };
    newUserData[e.currentTarget.name] = e.currentTarget.value;
    setUser(newUserData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsError(false);
    dispatch(loginUser({ email: user.email, password: user.password }));
    resetForm();
  };

  useEffect(() => {
    if (!isLoading && userError) setIsError(true);
  }, [isLoading, userError]);

  return (
    <Login>
      <StyledTitleForm>Log in</StyledTitleForm>

      <FormLogin onSubmit={handleSubmit}>
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

        <ButtonLogContainer>
          <ButtonLog>
            <StyledAccentButton type="submit" disabled={isLoading}>
              {isLoading ? <LoaderSmall /> : 'Log in'}
            </StyledAccentButton>
          </ButtonLog>

          <ButtonReg>
            <Link to={'/register'}>
              <StyledDefaultButton type="button">Register</StyledDefaultButton>
            </Link>
          </ButtonReg>
        </ButtonLogContainer>

        <ButtonReg style={{ margin: 0, marginTop: 20 }}>
          <a href={googleUrl}>
            <GoogleLoginButton type="button">Google</GoogleLoginButton>
          </a>
        </ButtonReg>
      </FormLogin>
    </Login>
  );
};
