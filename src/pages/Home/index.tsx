import { SelectPaymentType } from "../../components/SelectPaymentType";

export function Home() {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <SelectPaymentType>CARTÃO DE CRÉDITO</SelectPaymentType>
    </div>
  );
}
