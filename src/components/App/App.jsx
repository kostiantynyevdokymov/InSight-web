import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';

import { Loader } from 'components/Loader/Loader';
import { authHeader } from 'redux/utils/authHeader';
import { refreshUser } from 'redux/user/userOperations';
import { fetchUserDiet } from 'redux/diet/dietOperations';
import {
  selectDiet,
  selectUserIsLoggedIn,
  selectUserIsRefreshing,
  selectUserParams,
  selectUserToken,
} from 'redux/selectors';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const GoogleAuth = lazy(() => import('pages/GoogleAuth'));
const GoogleRedirect = lazy(() => import('pages/GoogleRedirect'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const CommonLayout = lazy(() => import('pages/CommonLayout'));

export const App = () => {
  const dispatch = useDispatch();
  const userParams = useSelector(selectUserParams);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);
  const token = useSelector(selectUserToken);
  const userDiet = useSelector(selectDiet);

  // Load user info into redux
  useEffect(() => {
    if (isRefreshing) {
      authHeader.set(token);

      dispatch(refreshUser());
    } else if (isLoggedIn) {
      if (!userParams?.height) {
        dispatch(refreshUser());
      } else if (!userDiet?.dailyCalories) {
        dispatch(fetchUserDiet(userParams));
      }
    }
  }, [dispatch, isLoggedIn, isRefreshing, token, userDiet, userParams]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<CalculatorPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />

          <Route path="google" element={<GoogleRedirect />} />
          <Route path="google-auth" element={<GoogleAuth />} />

          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="diary" element={<DiaryPage />}>
            <Route path=":day" element={<DiaryPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
