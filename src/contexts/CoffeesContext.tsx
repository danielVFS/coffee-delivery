import { createContext, ReactNode, useReducer } from "react";
import { Coffee } from "../core/models/Coffee";
import {
  addCoffeeToCartAction,
  changeCoffeeAmountAction,
  removeCoffeeAction,
} from "../reducers/coffee/actions";
import { coffeesReducer } from "../reducers/coffee/reducer";

interface CoffeesContextData {
  coffees: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
  changeCoffeeAmount: (amount: number, coffeeId: string) => void;
  removeCoffee: (coffeeId: string) => void;
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

  const removeCoffee = (coffeeId: string) => {
    dispatch(removeCoffeeAction(coffeeId));
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
        changeCoffeeAmount,
        removeCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
