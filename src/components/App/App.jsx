import { GoogleAuth } from 'components/GoogleAuth/GoogleAuth';
import { LogoMain } from 'components/Logo/Logo';
// import Loader from 'components/Loader/Loader';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

// const HomePage = lazy(() => import('pages/HomePage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const Loader = lazy(() => import('components/Loader/Loader'));
// const GoogleAuth = lazy(() => import('components/GoogleAuth/GoogleAuth'));
const CommonLayout = lazy(() => import('pages/CommonLayout'));
// const Phonebook = lazy(() => import('pages/Phonebook'));
// const Logout = lazy(() => import('pages/Logout'));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/InSight-web/"
        element={
          <Suspense fallback={<Loader />}>
            <CommonLayout />
            <LogoMain />
            <LoginPage />
            {/* <RegistrationPage /> */}
          </Suspense>
        }
      >
        <Route path="google-auth" element={<GoogleAuth />} />
      </Route>
      <Route path="*" element={<Navigate to="/InSight-web/" replace />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
