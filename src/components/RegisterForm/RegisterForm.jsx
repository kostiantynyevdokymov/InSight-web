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

import { InputName } from 'components/InputFormValid/InputName';
import { InputMail } from 'components/InputFormValid/InputEmail';
import { InputPassword } from 'components/InputFormValid/InputPassword';
import { LoaderSmall } from 'components/Loader/LoaderSmall';
import { StyledAccentButton, StyledDefaultButton } from 'components/Common/FormComponents';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialUser = { name: '', email: '', password: '' };
  const [user, setUser] = useState(initialUser);
  const [isError, setIsError] = useState(false);
  const isLoading = useSelector(selectIsLoadingUser);
  const userError = useSelector(selectErrorUser);
  const googleUrl = `${constants.apiServerAddress}/user/google`;

  const handleChange = e => {
    const newUserData = { ...user };
    newUserData[e.currentTarget.name] = e.currentTarget.value;
    setUser(newUserData);
  };

  const resetForm = () => {
    setUser(initialUser);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsError(false);
    await dispatch(registerUser({ name, email, password }));
    
    if (!isLoading && userError) {
      setIsError(true);
    } else {
      resetForm();
    };
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
            <StyledDefaultButton type="button">Google</StyledDefaultButton>
          </a>
        </ButtonReg>
      </FormRegistration>
    </Registration>
  );
};
