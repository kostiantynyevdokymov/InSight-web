import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { googleLogin } from 'redux/user/userSlice';
import { authHeader } from 'redux/utils/authHeader';

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const urlParams = new URL(window.location.href).searchParams;

  console.log(urlParams.has('token'));
  console.log(urlParams.has('name'));
  console.log(urlParams.has('email'));

  if (urlParams.has('name') && urlParams.has('email') && urlParams.has('token')) {
    const user = {
      name: urlParams.get('name'),
      email: urlParams.get('email'),
      token: urlParams.get('token'),
      isOAuth2: true,
    };

    dispatch(googleLogin(user));
    authHeader.set(user.token);
  }

  return <Navigate to="/" replace />;
};

export default GoogleAuth;
