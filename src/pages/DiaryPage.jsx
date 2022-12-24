import { Navigate, useParams } from 'react-router';
import { useAuth } from 'hooks/useAuth';
import { DairyForm } from 'components/DiaryForm/DairyForm';

export const DairyPage = () => {
  const { day } = useParams();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <DairyForm day={day} /> : <Navigate to="/login" />;
};

export default DairyPage;
