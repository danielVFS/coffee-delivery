import { createContext, ReactNode, useReducer } from "react";
import { Coffee } from "../core/models/Coffee";
import { addCoffeeToCartAction } from "../reducers/coffee/actions";
import { coffeesReducer } from "../reducers/coffee/reducer";

interface CoffeesContextData {
  coffees: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
  increaseCoffeeAmount: (coffeeId: string) => void;
  decreaseCoffeeAmount: (coffeeId: string) => void;
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

  const addCoffeeToCart = (coffee: Coffee) => {
    dispatch(addCoffeeToCartAction(coffee));
  };

  const increaseCoffeeAmount = (coffeeId: string) => {};

  const decreaseCoffeeAmount = (coffeeId: string) => {};

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
