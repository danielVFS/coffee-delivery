import { CoffeeCheckout } from "../../components/CoffeeCheckout";
import { Heading } from "../../components/Heading";
import { OrderForm } from "../../components/OrderForm";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Heading variant="xs" color="subtitle">
          Complete seu pedido
        </Heading>
        <OrderForm />
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
