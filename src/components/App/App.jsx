import { lazy, Suspense } from 'react';
import {
  //Navigate,
  Route, Routes
} from 'react-router';

import { Loader } from 'components/Loader/Loader';
import { authHeader } from 'redux/utils/authHeader';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/user/userOperations';
import { useAuth } from 'hooks/useAuth';

// const MainPageSelector = lazy(() => import('components/MainPage/MainPageSelector'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const LogoutPage = lazy(() => import('pages/Logout'));
const GoogleAuth = lazy(() => import('pages/GoogleAuth'));
const GoogleRedirect = lazy(() => import('pages/GoogleRedirect'));
const Calculator = lazy(() => import('pages/Calculator'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));

const CommonLayout = lazy(() => import('pages/CommonLayout'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, token } = useAuth();

  useEffect(() => {
    if (!isRefreshing) return;

    authHeader.set(token);
    dispatch(refreshUser());
  }, [dispatch, isRefreshing, token]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Calculator />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="register" element={<RegistrationPage />} />

          <Route path="google" element={<GoogleRedirect />} />
          <Route path="google-auth" element={<GoogleAuth />} />

          <Route path="calculator" element={<Calculator />} />
          <Route path="diary" element={<DiaryPage />}>
            <Route path=":day" element={<DiaryPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

// <Home />
// <LogoMain />
// <LoginPage />
// <RegistrationPage />
