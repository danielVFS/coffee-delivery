import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeeDeliveryImage from "../../assets/Coffee-Delivery.png";
import { CoffeeList } from "../../components/CoffeeList";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import {
  IntroContainer,
  Item,
  ItemIcon,
  ItemsContainer,
  TitleContainer,
} from "./styles";

export function Home() {
  return (
    <main>
      <IntroContainer>
        <div>
          <TitleContainer>
            <Heading variant="xl" color="title">
              Encontre o café perfeito para qualquer hora do dia
            </Heading>
            <Text variant="large" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Text>

            <ItemsContainer>
              <Item>
                <ItemIcon variant="yellow-dark">
                  <ShoppingCart weight="fill" />
                </ItemIcon>
                <Text variant="medium" color="text">
                  Compra simples e segura
                </Text>
              </Item>

              <Item>
                <ItemIcon variant="base-text">
                  <Package weight="fill" />
                </ItemIcon>
                <Text variant="medium" color="text">
                  Embalagem mantém o café intacto
                </Text>
              </Item>

              <Item>
                <ItemIcon variant="yellow">
                  <Timer weight="fill" />
                </ItemIcon>
                <Text variant="medium" color="text">
                  Entrega rápida e rastreadaa
                </Text>
              </Item>

              <Item>
                <ItemIcon variant="purple">
                  <Coffee weight="fill" />
                </ItemIcon>
                <Text variant="medium" color="text">
                  O café chega fresquinho até você
                </Text>
              </Item>
            </ItemsContainer>
          </TitleContainer>
        </div>
        <img src={CoffeeDeliveryImage} />
      </IntroContainer>

      <CoffeeList />
    </main>
  );
}
