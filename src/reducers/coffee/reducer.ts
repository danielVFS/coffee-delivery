import { produce } from "immer";
import { Coffee } from "../../core/models/Coffee";
import { CoffeeActionsTypes } from "./actions";

interface CoffeesState {
  coffees: Coffee[];
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case CoffeeActionsTypes.ADD_COFFEE_TO_CART: {
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
    }
    case CoffeeActionsTypes.CHANGE_COFFEE_AMOUNT: {
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId
      );

      if (action.payload.amount === 0) {
        return produce(state, (draft) => {
          draft.coffees = draft.coffees.filter(
            (coffee) => coffee.id !== action.payload.coffeeId
          );
        });
      }

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].amount = action.payload.amount;
      });
    }
    case CoffeeActionsTypes.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        draft.coffees = draft.coffees.filter(
          (coffee) => coffee.id !== action.payload.coffeeId
        );
      });
    }
    default:
      return state;
  }
}
