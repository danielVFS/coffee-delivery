import { produce } from "immer";
import { Coffee } from "../../core/models/Coffee";
import { CoffeeActionsTypes } from "./actions";

interface CoffeesState {
  coffees: Coffee[];
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case CoffeeActionsTypes.ADD_COFFEE_TO_CART:
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.coffee);
      });
    default:
      return state;
  }
}
