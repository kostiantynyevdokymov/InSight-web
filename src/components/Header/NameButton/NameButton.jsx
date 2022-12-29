import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserAuth } from 'redux/selectors';
import { Name } from './NameButton.styled';

export const NameButton = () => {
  const { name } = useSelector(selectUserAuth);
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
