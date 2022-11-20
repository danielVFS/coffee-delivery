import {
  Input as StyledInput,
  InputContainer,
  OptionalContainer,
} from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  optional?: boolean;
}

export function Input({ optional, ...props }: InputProps) {
  return (
    <InputContainer>
      <StyledInput {...props} />
      {optional && <OptionalContainer>Opcional</OptionalContainer>}
    </InputContainer>
  );
}
