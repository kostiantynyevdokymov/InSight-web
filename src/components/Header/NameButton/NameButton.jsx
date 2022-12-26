import { Name } from 'components/NavHeader/NavHeader.styled';
import { useAuth } from 'hooks/useAuth';

export const NameButton = () => {
  const { name } = useAuth();
  return <Name type="button">Welcome, {name}</Name>;
};
