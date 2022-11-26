import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Text } from "../Text";
import { SelectContainer } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value?: number;
}

export function SelectCoffeeAmount({ value, ...props }: ButtonProps) {
  const [selectedValue, setSelectedValue] = useState(value ? value : 1);

  const decreaseValue = () => {
    setSelectedValue((state) =>
      state !== 0 ? (state = state - 1) : (state = 0)
    );
  };

  const increaseValue = () => {
    setSelectedValue((state) => (state = state + 1));
  };

  return (
    <SelectContainer {...props}>
      <Minus onClick={decreaseValue} />
      <Text variant="medium" color="title">
        {String(selectedValue)}
      </Text>
      <Plus onClick={increaseValue} />
    </SelectContainer>
  );
}
