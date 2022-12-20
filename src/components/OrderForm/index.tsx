import {
  AddressContainer,
  OrderFormContainer,
  PaymentTypeContainer,
} from "./styles";

export function OrderForm() {
  return (
    <OrderFormContainer>
      <AddressContainer></AddressContainer>
      <PaymentTypeContainer></PaymentTypeContainer>
    </OrderFormContainer>
  );
}
