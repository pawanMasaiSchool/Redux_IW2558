import { createStore } from "redux";
import { increamentCounter } from "./action";
import { myReducer } from "./reducer";

const initialState = {
  count: 5
};

export const store = createStore(myReducer, initialState);

const myAction = increamentCounter(2);

store.subscribe(() => {
  console.log("Something changed");
  console.log(store.getState());
});

store.dispatch(myAction);
