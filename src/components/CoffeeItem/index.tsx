import { ShoppingCart } from "phosphor-react";
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
  name: string;
  srcImg: string;
  description: string;
  price: number;
  tags: string[];
}

export function CoffeeItem({
  name,
  srcImg,
  description,
  price,
  tags,
}: CoffeeItemProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <CoffeItemContainer>
      <CoffeeImage src={srcImg} />
      <TagsContainer>
        {tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </TagsContainer>
      <ItemInfoContainer>
        <Heading variant="small" color="subtitle">
          {name}
        </Heading>
        <Text variant="small" color="label">
          {description}
        </Text>
      </ItemInfoContainer>
      <ActionsContainer>
        <Heading variant="medium" color="text">
          {formattedPrice}
        </Heading>
        <Actions>
          <SelectCoffeeAmount />
          <IconButton variant="purple">
            <ShoppingCart weight="fill" />
          </IconButton>
        </Actions>
      </ActionsContainer>
    </CoffeItemContainer>
  );
}
