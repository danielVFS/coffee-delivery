import { v4 as uuid } from "uuid";
import americano from "../../assets/coffess/Americano.png";
import arabe from "../../assets/coffess/Arabe.png";
import cafe_com_leite from "../../assets/coffess/CafecomLeite.png";
import cafe_gelado from "../../assets/coffess/CafeGelado.png";
import capuccino from "../../assets/coffess/Capuccino.png";
import chocolate_quente from "../../assets/coffess/ChocolateQuente.png";
import cubano from "../../assets/coffess/Cubano.png";
import expresso from "../../assets/coffess/Expresso.png";
import expresso_cremoso from "../../assets/coffess/ExpressoCremoso.png";
import havaiano from "../../assets/coffess/Havaiano.png";
import irlandes from "../../assets/coffess/Irlandes.png";
import latte from "../../assets/coffess/Latte.png";
import macchiato from "../../assets/coffess/Macchiato.png";
import mocaccino from "../../assets/coffess/Mocaccino.png";
import { Coffee } from "../models/Coffee";

export const CoffeeMock: Coffee[] = [
  {
    id: uuid(),
    name: "Expresso Tradicional",
    tags: ["Tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    srcImg: expresso,
    price: 5,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Expresso Americano",
    tags: ["Tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    srcImg: americano,
    price: 4,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Expresso Cremoso",
    tags: ["Tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    srcImg: expresso_cremoso,
    price: 6.99,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Expresso Gelado",
    tags: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    srcImg: cafe_gelado,
    price: 7,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Café com Leite",
    tags: ["Tradicional", "Com Leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    srcImg: cafe_com_leite,
    price: 5.99,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Latte",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Uma dose de café expresso, com o dobro de leite e espuma cremosa",
    srcImg: latte,
    price: 6.6,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Capuccino",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    srcImg: capuccino,
    price: 10,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Macchiato",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    srcImg: macchiato,
    price: 9,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Mocaccino",
    tags: ["Tradicional", "Com Leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    srcImg: mocaccino,
    price: 9,
    amount: 0,
  },
  {
    id: "10",
    name: "Chocolate Quente",
    tags: ["Especial", "Com Leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    srcImg: chocolate_quente,
    price: 10.0,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Cubano",
    tags: ["Especial", "Alcoólico", "Gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    srcImg: cubano,
    price: 10.99,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Havaiano",
    tags: ["Especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    srcImg: havaiano,
    price: 9,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Árabe",
    tags: ["Especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    srcImg: arabe,
    price: 8,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Irlandês",
    tags: ["Especial", "Alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    srcImg: irlandes,
    price: 11,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Latte Vegano",
    tags: ["Especial", "Vegano"],
    description:
      "Uma dose de café expresso com  leite de soja e espuma cremosa",
    srcImg: latte,
    price: 11,
    amount: 0,
  },
  {
    id: uuid(),
    name: "Americano Gelado",
    tags: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso americano e cubos de gelo",
    srcImg: americano,
    price: 4,
    amount: 0,
  },
];
