import { Input } from "../../components/Input";

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
      <Input optional />
      <Input placeholder="Digite sua senha" />
      <Input defaultValue="Daniel Vitor" />
    </div>
  );
}
