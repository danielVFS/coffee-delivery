import { createContext, ReactNode, useReducer } from "react";
import { Coffee } from "../core/models/Coffee";
import { coffeesReducer } from "../reducers/coffee/reducer";

interface CoffeesContextData {
  coffees: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
  increaseCoffeeAmount: (coffeeId: number) => void;
  decreaseCoffeeAmount: (coffeeId: number) => void;
}

export const CoffeeContext = createContext({} as CoffeesContextData);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, { coffees: [] });

  const { coffees } = coffeesState;

  const addCoffeeToCart = (coffee: Coffee) => {};

  const increaseCoffeeAmount = (coffeeId: number) => {};

  const decreaseCoffeeAmount = (coffeeId: number) => {};

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
        increaseCoffeeAmount,
        decreaseCoffeeAmount,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
