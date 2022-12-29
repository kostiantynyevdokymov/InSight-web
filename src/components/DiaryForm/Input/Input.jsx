import { DairyInput } from './Input.styled';

export const Input = ({ id, name, placeholder, value, onChange, onClick, type }) => {
  return (
    <>
      <DairyInput
        id={id}
        name={name}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        onClick={onClick}
        type={type}
      />
    </>
  );
};
