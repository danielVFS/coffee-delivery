import { CoffeeCheckout } from "../../components/CoffeeCheckout";
import { Heading } from "../../components/Heading";
import { CheckoutContainer, OrderFormContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Heading variant="xs" color="subtitle">
          Complete seu pedido
        </Heading>
        <OrderFormContainer />
      </div>

      <div>
        <Heading variant="xs" color="subtitle">
          Cafés selecionados
        </Heading>
        <CoffeeCheckout />
      </div>
    </CheckoutContainer>
  );
}
