import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  registerUser  from 'redax/user/userOperations';
import  BasicButton  from 'Common/FormComponents';
import { StyledForm, StyledInput }  from 'Common/FormComponents';
import InputName from './Input/InputName';
import InputEmail from './Input/InputEmail';
import InputPassword from './Input/InputPassword';
import selectIsLoading from 'redux/user/userSelectors';

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
};