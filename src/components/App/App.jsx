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
            <LoginPage />
            {/* <RegistrationPage /> */}
          </Suspense>
        }
      ></Route>
