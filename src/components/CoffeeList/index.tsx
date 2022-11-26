import { CoffeeMock } from "../../core/data/CoffeeMock";
import { CoffeeItem } from "../CoffeeItem";
import { Heading } from "../Heading";
import { CoffeeListContainer, ListCoffee } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <Heading variant="large" color="subtitle">
        Nossos cafés
      </Heading>

      <ListCoffee>
        {CoffeeMock.map((coffee) => {
          return <CoffeeItem key={coffee.id} coffee={coffee} />;
        })}
      </ListCoffee>
    </CoffeeListContainer>
  );
}
