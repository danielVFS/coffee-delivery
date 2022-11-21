import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/Logo.svg";
import { IconButton } from "../IconButton";
import { Text } from "../Text";
import { HeaderActions, HeaderContainer, LocationContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffee Delivery logo" />
      <HeaderActions>
        <LocationContainer>
          <MapPin weight="fill" className="location-svg" />
          <Text variant="small">Porto Alegre, RS</Text>
        </LocationContainer>

        <IconButton variant="yellow">
          <ShoppingCart weight="fill" />
        </IconButton>
      </HeaderActions>
    </HeaderContainer>
  );
}
