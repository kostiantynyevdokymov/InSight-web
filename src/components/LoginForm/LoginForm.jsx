import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginUser from 'redax/user/userOperations';
import selectIsLoading from 'redux/user/userSelectors';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import {
  Login,
  FormLogin,
  StyledTitleForm,
  StyledLabelInput,
  InputForm,
  ButtonReg,
  AccentButton,
  ButtonLog,
  DefaultButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Імейл не може бути порожнім');
  const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім');
  const isLoading = useSelector(selectIsLoading);

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError("Некоректний імейл")
    } else setEmailError('')
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.length > 8) {
      setPasswordError('Пароль має бути довшим за 3 та не менш ніж 8 ')
      if (!e.target.value) {
        setPasswordError('Пароль має бути довшим за 3 та не менш ніж 8 ')
      }
    } else {
      setPassword('')
    }
  }

  const handleBlur = (e) => {
    switch (e.currentTarget.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
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
      <FormLogin onSubmit={handleSubmit}>
        <StyledTitleForm>Log in</StyledTitleForm>

        <StyledInputGroup>
          <StyledLabelInput>
            E-mail *
            {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
            <InputForm onChange={e => emailHandler(e)} value={email} onBlur={e => handleBlur(e)} type="email" name="email" />
          </StyledLabelInput>
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabelInput>
            Password *
            {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
            <InputForm onChange={e => passwordHandler(e)} value={password} onBlur={e => handleBlur(e)} type="password" name="password" />
          </StyledLabelInput>
        </StyledInputGroup>

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

      </FormLogin>
    </Login>
  );
};