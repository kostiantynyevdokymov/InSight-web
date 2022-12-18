import FruitItem from './LoaderDivItem';
import { Overlay } from './Lloader.styled';

export default function Loader(props) {
  return (
    <Overlay {...props}>
      <FruitItem />
    </Overlay>
  );
}
