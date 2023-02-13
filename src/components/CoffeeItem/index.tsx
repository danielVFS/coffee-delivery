import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeesContext";
import { Coffee } from "../../core/models/Coffee";
import { Heading } from "../Heading";
import { IconButton } from "../IconButton";
import { SelectCoffeeAmount } from "../SelectCoffeeAmount";
import { Text } from "../Text";
import {
  Actions,
  ActionsContainer,
  CoffeeImage,
  CoffeItemContainer,
  ItemInfoContainer,
  Tag,
  TagsContainer,
} from "./styles";

interface CoffeeItemProps {
  coffee: Coffee;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { addCoffeeToCart, coffees } = useContext(CoffeeContext);

  const [amount, setAmount] = useState(
    coffees.find((cf) => cf.id === coffee.id)?.amount
  );

  const handleSetAmount = (value: number) => {
    setAmount(value);
  };

  const handleAddShoppingToCart = () => {
    const coffeeWithAmount: Coffee = { ...coffee, amount };
    addCoffeeToCart(coffeeWithAmount);
  };

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(coffee.price);

  return (
    <CoffeItemContainer>
      <CoffeeImage src={coffee.srcImg} />
      <TagsContainer>
        {coffee.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </TagsContainer>
      <ItemInfoContainer>
        <Heading variant="small" color="subtitle">
          {coffee.name}
        </Heading>
        <Text variant="small" color="label">
          {coffee.description}
        </Text>
      </ItemInfoContainer>
      <ActionsContainer>
        <Heading variant="medium" color="text">
          {formattedPrice}
        </Heading>
        <Actions>
          <SelectCoffeeAmount
            amount={amount}
            onAmountChange={handleSetAmount}
          />
          <IconButton variant="purple" onClick={handleAddShoppingToCart}>
            <ShoppingCart weight="fill" />
          </IconButton>
        </Actions>
      </ActionsContainer>
    </CoffeItemContainer>
  );
}
