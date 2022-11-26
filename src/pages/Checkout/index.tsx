import { Heading } from "../../components/Heading";
import { CheckoutContainer, CoffeeCard, OrderFormContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Heading variant="xs" color="subtitle">
          Complete seu pedido
        </Heading>
        <OrderFormContainer></OrderFormContainer>
      </div>

      <div>
        <Heading variant="xs" color="subtitle">
          Cafés selecionados
        </Heading>
        <CoffeeCard></CoffeeCard>
      </div>
    </CheckoutContainer>
  );
}
