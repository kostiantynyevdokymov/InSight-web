import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { Name } from './NameButton.styled';

export const NameButton = () => {
  const { name } = useAuth();
  const [clickCount, setClickCount] = useState(0);

  const HandleButtonPress = () => {
    if (clickCount >= 5) {
      setClickCount(0);
      window.alert("You won't loose much weight by just clicking the mouse!");
    }
    setClickCount(clickCount + 1);
  };

  return (
    <Name type="button" onClick={HandleButtonPress}>
      {name}
    </Name>
  );
};
