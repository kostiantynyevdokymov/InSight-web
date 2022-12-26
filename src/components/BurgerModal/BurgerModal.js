import { BurgerModal, Menu, LinkContainer, NavLink } from './BurgerModal.styled';

export const BurgerMenu = ({ active, setActive }) => {
  return (
    <BurgerModal className={active ? 'active' : ''}>
      <Menu>
        <LinkContainer>
          <NavLink to={'diary'}>DIARY</NavLink>
          <NavLink to={'calculator'}>CALCULATOR</NavLink>
        </LinkContainer>
      </Menu>
    </BurgerModal>
  );
};

// const [menuActive, setmenuActive] = useState(false);

// // Встав перевірку для того, щоб зрозуміти яку кнопки показувати:

// const button1 = menuActive ? (<CloseButton />) : (<HamburgerButton />);

// return (
//     // чийсь код, на його кнопку вішаємо на клік:

//     <BurgerSomething onClick={()=> setmenuActive(!menuActive)}>{button1}</BurgerSomething>

//     <BurgerMenu active={menuActive} setActive={setmenuActive} />
// )
