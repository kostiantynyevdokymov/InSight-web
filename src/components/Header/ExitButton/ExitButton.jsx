import { Exit } from "components/NavHeader/NavHeader.styled";
import { useDispatch } from "react-redux";
import { logoutUser } from "redux/user/userOperations";

export const ExitButton = () => {
  const dispatch = useDispatch();
  return (
    <Exit type="button" onClick={() => dispatch(logoutUser())}>
      Exit
    </Exit>
  );
};