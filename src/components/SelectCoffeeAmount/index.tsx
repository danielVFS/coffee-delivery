import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Coffee } from "../../core/models/Coffee";
import { Text } from "../Text";
import { SelectContainer } from "./styles";

interface SelectCoffeeAmountProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  coffee: Coffee;
  amount?: number;
  onAmountChange: (amount: number, coffeeId: string) => void;
}

export function SelectCoffeeAmount({
  coffee,
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
    onAmountChange(value, coffee.id);
  };

  const increaseValue = () => {
    const value = selectedAmount + 1;
    setSelectedAmount(value);
    onAmountChange(value, coffee.id);
  };

  return (
    <SelectContainer {...props}>
      <Minus onClick={decreaseValue} style={{ cursor: "pointer" }} />
      <Text variant="medium" color="title">
        {String(selectedAmount)}
      </Text>
      <Plus onClick={increaseValue} style={{ cursor: "pointer" }} />
    </SelectContainer>
  );
}
