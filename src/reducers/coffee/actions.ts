import { Coffee } from "../../core/models/Coffee";

export enum CoffeeActionsTypes {
  ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART",
  CHANGE_COFFEE_AMOUNT = "CHANGE_COFFEE_AMOUNT",
  REMOVE_COFFEE = "REMOVE_COFFEE",
}

export function addCoffeeToCartAction(coffee: Coffee) {
  return {
    type: CoffeeActionsTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
    },
  };
}

export function changeCoffeeAmountAction(amount: number, coffeeId: string) {
  return {
    type: CoffeeActionsTypes.CHANGE_COFFEE_AMOUNT,
    payload: {
      amount,
      coffeeId,
    },
  };
}

export function removeCoffeeAction(coffeeId: string) {
  return {
    type: CoffeeActionsTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  };
}
