import { produce } from "immer";
import { Coffee } from "../../core/models/Coffee";
import { CoffeeActionsTypes } from "./actions";

interface CoffeesState {
  coffees: Coffee[];
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case CoffeeActionsTypes.ADD_COFFEE_TO_CART:
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffee.id
      );

      if (coffeeIndex < 0) {
        return produce(state, (draft) => {
          draft.coffees.push(action.payload.coffee);
        });
      }

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].amount = action.payload.coffee.amount;
      });
    default:
      return state;
  }
}
