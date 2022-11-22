import { CoffeeItem } from "../CoffeeItem";
import { Heading } from "../Heading";
import { CoffeeListContainer } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <Heading variant="large" color="subtitle">
        Nossos cafés
      </Heading>

      <div>
        <CoffeeItem />
      </div>
    </CoffeeListContainer>
  );
}
