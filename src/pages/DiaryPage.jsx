import { Navigate } from 'react-router';
import { DairyForm } from 'components/DiaryForm/DairyForm'
import { useAuth } from 'hooks/useAuth';

export const DairyPage = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
     <DairyForm/> 
  ) : (
    <Navigate to="/login" />
  );
};

export default DairyPage;