import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import registerUser from 'redax/user/userOperations';
//import { StyledAccentButton, StyledDefaultButton } from 'Common/FormComponents';
//import { StyledForm, StyledLabel, StyledTitleForm } from 'Common/FormComponents';
import selectIsLoading from 'redux/user/userSelectors';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState("Ім'я не може бути порожнім");
  const [emailError, setEmailError] = useState('Імейл не може бути порожнім');
  const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім');
  const isLoading = useSelector(selectIsLoading);

  const nameHandler = (e) => {
    setName(e.target.value)
    const re = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
    if (!re.test(String(name))) {
      setNameError("Некорректне ім'я")
    } else setNameError('')
  }

  const emailHandler = (e) => {
    setName(e.target.value)
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError("Некорректний імейл")
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser.register({ name, email, password }));
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
            <InputName onChange={e => nameHandler(e)} value={name} onBlur={e => handleBlur(e)} type="name" name="name" />
          </StyledLabel>
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel>
            <p>E-mail *</p>
            {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
            <InputEmail onChange={e => emailHandler(e)} value={email} onBlur={e => handleBlur(e)} type="email" name="email" />
          </StyledLabel>
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel>
            <p>Password *</p>
            {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
            <InputPassword onChange={e => passwordHandler(e)} value={password} onBlur={e => handleBlur(e)} type="password" name="password" />
          </StyledLabel>
        </StyledInputGroup>
        <RegisterButtonGroup>
          <RegisterButtonReg>
          <StyledAccentButton type="submit" disabled={isLoading}>
            {isLoading ? (<Loader ariaLabel="loader-spinner" visible={true} />) : ('Register')}
          </StyledAccentButton>
        </RegisterButtonReg>

        <RegisterButtonLog>
          <Link to="/login">
            <StyledDefaultButton type="button">Log in</StyledDefaultButton>
          </Link>
        </RegisterButtonLog>
        </RegisterButtonGroup>
        
      </FormRegistration>
    </Registration>
  );
};
