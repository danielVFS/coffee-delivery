import { ReactElement } from "react";
import {
  BUTTON_COLOR,
  IconButtonBadge,
  IconButtonButtonContainer,
} from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof BUTTON_COLOR;
  children: ReactElement;
  count?: number;
}

export function IconButton({
  variant,
  count,
  children,
  ...props
}: ButtonProps) {
  return (
    <IconButtonButtonContainer variant={variant} {...props}>
      {children}
      {count && <IconButtonBadge variant={variant}>{count}</IconButtonBadge>}
    </IconButtonButtonContainer>
  );
}
