import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import { CoffeeContext } from "../../contexts/CoffeesContext";
import { IconButton } from "../IconButton";
import { Text } from "../Text";
import { HeaderActions, HeaderContainer, LocationContainer } from "./styles";

export function Header() {
  const { coffees } = useContext(CoffeeContext);

  const coffeeSum = coffees.reduce(
    (acc, current) => acc + (current.amount ? current.amount : 0),
    0
  );

  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffee Delivery logo" />
      <HeaderActions>
        <LocationContainer>
          <MapPin weight="fill" className="location-svg" />
          <Text variant="small" color="purple-dark">
            Porto Alegre, RS
          </Text>
        </LocationContainer>

        {coffeeSum === 0 ? (
          <IconButton variant="yellow">
            <ShoppingCart weight="fill" />
          </IconButton>
        ) : (
          <IconButton variant="yellow" count={coffeeSum}>
            <ShoppingCart weight="fill" />
          </IconButton>
        )}
      </HeaderActions>
    </HeaderContainer>
  );
}
