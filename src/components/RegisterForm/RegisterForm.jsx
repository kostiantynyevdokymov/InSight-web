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
  InputForm,
  ButtonReg,
  AccentButton,
  ButtonLog,
  DefaultButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState("Ім'я не може бути порожнім");
  const [emailError, setEmailError] = useState("Імейл не може бути порожнім");
  const [passwordError, setPasswordError] = useState("Пароль не може бути порожнім");
  const isLoading = useSelector(selectIsLoadingUser);
    
  const nameHandler = (e) => {
    setName(e.target.value)
      const re = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
      if (!re.test(String(name).toLowerCase())) {
      setNameError("Некоректне ім'я")
    } else setNameError('')
  }

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
      case 'name':
        setNameDirty(true);
        break;    
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    resetForm();
  };

  return (
    <Registration autoComplete="off">
        <FormRegistration onSubmit={handleSubmit}>
            <StyledTitleForm>Register</StyledTitleForm>

            <StyledInputGroup>
                <StyledLabelInput>
                    Name *
                    {(nameDirty && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
                    <InputForm onChange={e => nameHandler(e)} value={name} onBlur={e => handleBlur(e)} type="name" name="name" />
                </StyledLabelInput>
            </StyledInputGroup>
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
    
            <ButtonReg>
                <AccentButton type="submit" disabled={isLoading}>
                    {isLoading ? (<Loader ariaLabel="loader-spinner" visible={true} />) : ('Register')}
                </AccentButton>
            </ButtonReg>
            <ButtonLog>
                <Link to="/login">
                  <DefaultButton type="button">Login</DefaultButton>
                </Link>
            </ButtonLog>
        </FormRegistration>
        </Registration>
   );
  };
