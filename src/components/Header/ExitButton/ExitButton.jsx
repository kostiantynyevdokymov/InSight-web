import { useDispatch } from "react-redux";
import { logoutUser } from "redux/user/userOperations";
import { Exit } from "./ExitButton.styled";

export const ExitButton = () => {
  const dispatch = useDispatch();
  return (
    <Exit type="button" onClick={() => dispatch(logoutUser())}>
      Exit
    </Exit>
  );
};