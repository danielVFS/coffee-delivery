import { MapPinLine } from "phosphor-react";
import { Text } from "../Text";
import {
  AddressContainer,
  AddressInfo,
  AddressInfoContainer,
  OrderFormContainer,
  PaymentTypeContainer,
} from "./styles";

export function OrderForm() {
  return (
    <OrderFormContainer>
      <AddressContainer>
        <AddressInfoContainer>
          <MapPinLine size={22} weight="regular" />
          <AddressInfo>
            <Text variant="medium" color="subtitle">
              Endereço de Entrega
            </Text>
            <Text variant="small" color="text">
              Informe o endereço onde deseja receber seu pedido
            </Text>
          </AddressInfo>
        </AddressInfoContainer>
      </AddressContainer>
      <PaymentTypeContainer></PaymentTypeContainer>
    </OrderFormContainer>
  );
}
