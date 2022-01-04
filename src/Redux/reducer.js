import { INCREAMENT_COUNTER } from "./action";

export const myReducer = (currentState, action) => {
  switch (action.type) {
    case INCREAMENT_COUNTER:
      return {
        ...currentState,
        count: currentState.count + action.payload
      };
    default:
      return currentState;
  }
};
