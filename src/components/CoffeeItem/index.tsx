import { ShoppingCart } from "phosphor-react";
import AmericanoImg from "../../assets/coffess/Americano.png";
import { Heading } from "../Heading";
import { IconButton } from "../IconButton";
import { Select } from "../Select";
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

export function CoffeeItem() {
  return (
    <CoffeItemContainer>
      <CoffeeImage src={AmericanoImg} />
      <TagsContainer>
        <Tag>Tradicional</Tag>
      </TagsContainer>
      <ItemInfoContainer>
        <Heading variant="small" color="subtitle">
          Expresso Tradicional
        </Heading>
        <Text variant="small" color="label">
          O tradicional café feito com água quente e grãos moídos
        </Text>
      </ItemInfoContainer>
      <ActionsContainer>
        <Heading variant="medium" color="text">
          R$ 9,90
        </Heading>
        <Actions>
          <Select />
          <IconButton variant="purple">
            <ShoppingCart weight="fill" />
          </IconButton>
        </Actions>
      </ActionsContainer>
    </CoffeItemContainer>
  );
}
