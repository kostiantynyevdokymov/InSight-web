import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/user/userOperations';
import { selectIsLoadingUser } from 'redux/user/userSelectors';
import { Loader } from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import {
  Login,
  FormLogin,
  StyledInputGroup,
  StyledTitleForm,
  StyledLabelInput,
  ButtonLogContainer,
  ButtonReg,
  AccentButton,
  ButtonLog,
  DefaultButton,
} from './LoginForm.styled';

import { InputMail } from 'components/InputFormValid/InputEmail';
import { InputPassword } from 'components/InputFormValid/InputPassword';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  c
  const isLoading = useSelector(selectIsLoadingUser);

  const handleChange = e => {
    switch (e.currentTarget.name) {     
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
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    resetForm();
  };

  return (
    <Login autoComplete="off">
      <StyledTitleForm>Log in</StyledTitleForm>
      <FormLogin onSubmit={handleSubmit}>        

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

        <ButtonLogContainer>
          <ButtonLog>
          <AccentButton type="submit" disabled={isLoading}>
            {isLoading ? (<Loader ariaLabel="loader-spinner" visible={true} />) : ('Log in')}
          </AccentButton>
        </ButtonLog>
        <ButtonReg>
          <Link to="/register">
            <DefaultButton type="button">Register</DefaultButton>
          </Link>
          </ButtonReg>
        </ButtonLogContainer> 
       

      </FormLogin>
    </Login>
  );
};