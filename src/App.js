import { useSelector } from "react-redux";
import { Counter } from "./Counter/Counter";
import "./styles.css";

export default function App() {
  const count = useSelector((st) => st.count);

  console.log("app", count);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>counter: {count}</h1>
      <Counter />
    </div>
  );
}
