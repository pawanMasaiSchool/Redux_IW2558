export const INCREAMENT_COUNTER = "INCREAMENT_COUNTER";

export const increamentCounter = (amount) => ({
  type: INCREAMENT_COUNTER,
  payload: amount
});
