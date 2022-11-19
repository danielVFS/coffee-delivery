import { ButtonContainer, BUTTON_COLORS } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof BUTTON_COLORS;
  fullWidth?: boolean;
  children: string;
}

export function Button({
  variant,
  fullWidth,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} fullWidth={fullWidth} {...props}>
      {children}
    </ButtonContainer>
  );
}
