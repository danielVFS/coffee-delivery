import {
  Input as StyledInput,
  InputContainer,
  OptionalContainer,
} from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  width?: string;
  optional?: boolean;
}

export function Input({
  width = "100%",
  optional = false,
  ...props
}: InputProps) {
  return (
    <InputContainer style={{ width: width }}>
      <StyledInput {...props} />
      {optional && <OptionalContainer>Opcional</OptionalContainer>}
    </InputContainer>
  );
}
