import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';
import { DairyForm } from 'components/DiaryForm/DairyForm';

export const DairyPage = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <DairyForm /> : <Navigate to="/login" />;
};

export default DairyPage;
