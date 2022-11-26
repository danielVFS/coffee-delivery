import { Coffee } from "../../core/models/Coffee";

export enum CoffeeActionsTypes {
  ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART",
  INCREASE_COFFEE_AMOUNT = "INCREASE_COFFEE_AMOUNT",
  DECREASE_COFFEE_AMOUNT = "DECREASE_COFFEE_AMOUNT",
}

export function addCoffeeToCartAction(coffee: Coffee) {
  return {
    type: CoffeeActionsTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
    },
  };
}

export function increaseCoffeeAmountAction(coffeeId: string) {
  return {
    type: CoffeeActionsTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffeeId,
    },
  };
}

export function decreaseCoffeeAmountAction(coffeeId: string) {
  return {
    type: CoffeeActionsTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffeeId,
    },
  };
}
