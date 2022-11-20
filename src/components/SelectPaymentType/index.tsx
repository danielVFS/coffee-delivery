import { CreditCard } from "phosphor-react";
import { SelectPaymentContainer } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function SelectPaymentType({ children, ...props }: ButtonProps) {
  return (
    <SelectPaymentContainer {...props}>
      <CreditCard weight="thin" />
      {children}
    </SelectPaymentContainer>
  );
}
