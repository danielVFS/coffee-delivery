import { ShoppingCart } from "phosphor-react";
import { IconButton } from "../../components/IconButton";

export function Home() {
  return (
    <div style={{ marginTop: "20px" }}>
      <IconButton variant="yellow" count={8}>
        <ShoppingCart weight="fill" />
      </IconButton>
      <br />
      <IconButton variant="purple">
        <ShoppingCart weight="fill" />
      </IconButton>
    </div>
  );
}
