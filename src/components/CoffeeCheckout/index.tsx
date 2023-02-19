import { Trash } from "phosphor-react";
import { useContext } from "react";
import CoffeePlaceImg from "../../assets/coffee-place.svg";
import ExpressoImg from "../../assets/coffess/Expresso.png";
import { CoffeeContext } from "../../contexts/CoffeesContext";
import { ListDivider } from "../../styles/globalStyles";
import { Button } from "../Button";
import { SelectCoffeeAmount } from "../SelectCoffeeAmount";
import { Text } from "../Text";
import {
  CoffeeCheckoutContainer,
  CoffeeCheckoutInfo,
  CoffeeCheckoutInfoContainer,
  CoffeeCheckoutItem,
  CoffeeCheckoutItemInfo,
  CoffeeCheckoutItemInfoActions,
  CoffeeCheckoutItemInfoDetails,
  CoffeeCheckoutRemoveItemButton,
  WithoutCoffeeSelectedContainer,
} from "./styles";

export function CoffeeCheckout() {
  const { coffees } = useContext(CoffeeContext);

  return (
    <CoffeeCheckoutContainer>
      {coffees.length > 0 ? (
        <>
          <CoffeeCheckoutItem>
            <CoffeeCheckoutItemInfo>
              <img src={ExpressoImg} />
              <CoffeeCheckoutItemInfoDetails>
                <Text variant="medium" color="subtitle">
                  Expresso Tradicional
                </Text>
                <CoffeeCheckoutItemInfoActions>
                  <SelectCoffeeAmount amount={1} onAmountChange={() => {}} />
                  <CoffeeCheckoutRemoveItemButton>
                    <Trash width={16} />
                    <Text variant="small" color="text">
                      REMOVER
                    </Text>
                  </CoffeeCheckoutRemoveItemButton>
                </CoffeeCheckoutItemInfoActions>
              </CoffeeCheckoutItemInfoDetails>
            </CoffeeCheckoutItemInfo>
            <Text variant="medium" color="text" bold>
              R$ 9,90
            </Text>
          </CoffeeCheckoutItem>
          <ListDivider />
          <CoffeeCheckoutItem>
            <Text variant="medium" color="text" bold>
              R$ 9,90
            </Text>
          </CoffeeCheckoutItem>
          <ListDivider />
          <CoffeeCheckoutInfoContainer>
            <CoffeeCheckoutInfo>
              <Text variant="small" color="text">
                Total de Items
              </Text>
              <Text variant="medium" color="text">
                R$ 27,90
              </Text>
            </CoffeeCheckoutInfo>

            <CoffeeCheckoutInfo>
              <Text variant="small" color="text">
                Entrega
              </Text>
              <Text variant="medium" color="text">
                R$ 3,50
              </Text>
            </CoffeeCheckoutInfo>

            <CoffeeCheckoutInfo>
              <Text variant="large" color="subtitle" bold>
                Total
              </Text>
              <Text variant="large" color="subtitle" bold>
                R$ 33,20
              </Text>
            </CoffeeCheckoutInfo>
          </CoffeeCheckoutInfoContainer>
          <Button variant="yellow" fullWidth>
            CONFIRMAR PEDIDO
          </Button>
        </>
      ) : (
        <WithoutCoffeeSelectedContainer>
          <img src={CoffeePlaceImg} />
          <Text variant="large" color="subtitle" bold>
            Você não tem nenhum café selecionado no carrinho
          </Text>
        </WithoutCoffeeSelectedContainer>
      )}
    </CoffeeCheckoutContainer>
  );
}
