import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import CoffeePlaceImg from "../../assets/coffee-place.svg";
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
  const [deliveryPrice, setDeliveryPrice] = useState(5);

  const { coffees, changeCoffeeAmount, removeCoffee } =
    useContext(CoffeeContext);

  const formatValueToPrice = (value: number): string => {
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);

    return formattedPrice;
  };

  const handleRemoveCoffee = (coffeeId: string) => {
    removeCoffee(coffeeId);
  };

  const handleChangeCoffeeAmount = (amount: number, coffeeId: string) => {
    changeCoffeeAmount(amount, coffeeId);
  };

  const priceOfCoffees = coffees.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  const totalPrice =
    coffees.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    ) + deliveryPrice;

  return (
    <CoffeeCheckoutContainer>
      {coffees.length > 0 ? (
        <>
          {coffees.map((coffee) => {
            return (
              <div key={coffee.id}>
                <CoffeeCheckoutItem>
                  <CoffeeCheckoutItemInfo>
                    <img src={coffee.srcImg} />
                    <CoffeeCheckoutItemInfoDetails>
                      <Text variant="medium" color="subtitle">
                        {coffee.name}
                      </Text>
                      <CoffeeCheckoutItemInfoActions>
                        <SelectCoffeeAmount
                          amount={coffee.amount}
                          coffee={coffee}
                          onAmountChange={handleChangeCoffeeAmount}
                        />
                        <CoffeeCheckoutRemoveItemButton
                          onClick={(e) => handleRemoveCoffee(coffee.id)}
                        >
                          <Trash width={16} />
                          <Text variant="small" color="text">
                            REMOVER
                          </Text>
                        </CoffeeCheckoutRemoveItemButton>
                      </CoffeeCheckoutItemInfoActions>
                    </CoffeeCheckoutItemInfoDetails>
                  </CoffeeCheckoutItemInfo>
                  <Text variant="medium" color="text" bold>
                    {formatValueToPrice(coffee.price * coffee.amount!)}
                  </Text>
                </CoffeeCheckoutItem>
                <ListDivider />
              </div>
            );
          })}

          <CoffeeCheckoutInfoContainer>
            <CoffeeCheckoutInfo>
              <Text variant="small" color="text">
                Total de Items
              </Text>
              <Text variant="medium" color="text">
                {formatValueToPrice(priceOfCoffees)}
              </Text>
            </CoffeeCheckoutInfo>

            <CoffeeCheckoutInfo>
              <Text variant="small" color="text">
                Entrega
              </Text>
              <Text variant="medium" color="text">
                {formatValueToPrice(deliveryPrice)}
              </Text>
            </CoffeeCheckoutInfo>

            <CoffeeCheckoutInfo>
              <Text variant="large" color="subtitle" bold>
                Total
              </Text>
              <Text variant="large" color="subtitle" bold>
                {formatValueToPrice(totalPrice)}
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
