import { createContext, ReactNode, useReducer } from "react";
import { Coffee } from "../core/models/Coffee";
import {
  addCoffeeToCartAction,
  changeCoffeeAmountAction,
} from "../reducers/coffee/actions";
import { coffeesReducer } from "../reducers/coffee/reducer";

interface CoffeesContextData {
  coffees: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
  changeCoffeeAmount: (amount: number, coffeeId: string) => void;
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

  const changeCoffeeAmount = (amount: number, coffeeId: string) => {
    dispatch(changeCoffeeAmountAction(amount, coffeeId));
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
        changeCoffeeAmount,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
