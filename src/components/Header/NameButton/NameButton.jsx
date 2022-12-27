import { useAuth } from 'hooks/useAuth';
import { Name } from './NameButton.styled';

export const NameButton = () => {
  const { name } = useAuth();
  return <Name type="button">Welcome, {name}</Name>;
};
