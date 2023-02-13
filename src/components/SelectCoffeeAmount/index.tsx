import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Text } from "../Text";
import { SelectContainer } from "./styles";

interface SelectCoffeeAmountProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  amount?: number;
  onAmountChange: (value: number) => void;
}

export function SelectCoffeeAmount({
  amount,
  onAmountChange,
  ...props
}: SelectCoffeeAmountProps) {
  const [selectedAmount, setSelectedAmount] = useState(
    amount !== undefined ? amount : 0
  );

  const decreaseValue = () => {
    const value = selectedAmount !== 0 ? selectedAmount - 1 : 0;
    setSelectedAmount(value);
    onAmountChange(value);
  };

  const increaseValue = () => {
    const value = selectedAmount + 1;
    setSelectedAmount(value);
    onAmountChange(value);
  };

  return (
    <SelectContainer {...props}>
      <Minus onClick={decreaseValue} />
      <Text variant="medium" color="title">
        {String(selectedAmount)}
      </Text>
      <Plus onClick={increaseValue} />
    </SelectContainer>
  );
}
