import FruitItem from './LoaderItem';
import { Overlay } from './Loader.styled';

export default function Loader(props) {
  return (
    <Overlay {...props}>
      <FruitItem />
    </Overlay>
  );
}
