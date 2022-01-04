import { useDispatch } from "react-redux";
import { increamentCounter } from "../Redux/action";

export function Counter() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const myAct = increamentCounter(1);
    dispatch(myAct);
  };

  return <button onClick={handleAdd}>Increament</button>;
}
