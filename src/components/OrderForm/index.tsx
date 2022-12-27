import { MapPinLine } from "phosphor-react";
import { Input } from "../Input";
import { Text } from "../Text";
import {
  AddressContainer,
  AddressFormContainer,
  AddressInfo,
  AddressInfoContainer,
  InputInfoContainer,
  OrderFormContainer,
  PaymentInfoContainer,
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

        <AddressFormContainer>
          <Input placeholder="CEP" width="200px" />
          <Input placeholder="Rua" />
          <InputInfoContainer>
            <Input placeholder="Número" width="200px" />
            <Input placeholder="Complemento" optional />
          </InputInfoContainer>
          <InputInfoContainer>
            <Input placeholder="Bairo" width="200px" />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" width="60px" />
          </InputInfoContainer>
        </AddressFormContainer>
      </AddressContainer>

      <PaymentTypeContainer>
        <PaymentInfoContainer>
          <MapPinLine size={22} weight="regular" />
          <AddressInfo>
            <Text variant="medium" color="subtitle">
              Pagamento
            </Text>
            <Text variant="small" color="text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Text>
          </AddressInfo>
        </PaymentInfoContainer>
      </PaymentTypeContainer>
    </OrderFormContainer>
  );
}
