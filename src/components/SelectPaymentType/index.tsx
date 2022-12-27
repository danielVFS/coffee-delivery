import { Bank, CreditCard, Money } from "phosphor-react";
import { useEffect, useState } from "react";
import { Text } from "../Text";
import { PaymentTypeButton, SelectPaymentTypeContainer } from "./styles";

type PaymentOptions = "credit" | "debit" | "money";
interface SelectPaymentTypeProps {
  optionSelected?: PaymentOptions;
  onOptionSelected: (option: PaymentOptions) => void;
}

export function SelectPaymentType({
  optionSelected = "money",
  onOptionSelected,
}: SelectPaymentTypeProps) {
  const [option, selectOption] = useState<PaymentOptions>(optionSelected);

  const handleSetOption = (value: PaymentOptions): void => {
    selectOption(value);
  };

  useEffect(() => {
    onOptionSelected(option);
  }, [option]);

  return (
    <SelectPaymentTypeContainer>
      <PaymentTypeButton
        className={option === "credit" ? "active" : ""}
        onClick={() => handleSetOption("credit")}
      >
        <CreditCard weight="thin" />
        <Text color="text" variant="small">
          CARTÃO DE CRÉDITO
        </Text>
      </PaymentTypeButton>

      <PaymentTypeButton
        className={option === "debit" ? "active" : ""}
        onClick={() => handleSetOption("debit")}
      >
        <Bank weight="thin" />
        <Text color="text" variant="small">
          CARTÃO DE DEBITO
        </Text>
      </PaymentTypeButton>

      <PaymentTypeButton
        className={option === "money" ? "active" : ""}
        onClick={() => handleSetOption("money")}
      >
        <Money weight="thin" />
        <Text color="text" variant="small">
          DINHEIRO
        </Text>
      </PaymentTypeButton>
    </SelectPaymentTypeContainer>
  );
}
