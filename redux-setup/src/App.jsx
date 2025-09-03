import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  loggedValue,
} from "./redux/counterSlice";

function App() {
  const { value, lastLogged } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Understanding</h1>
      <h2>Count : {value}</h2>

      <button
        onClick={() => dispatch(increment())}
        className="border border-green-500 w-10"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="border border-red-500 w-10"
      >
        -
      </button>

      <div>
        <h2>Last Logged: {lastLogged}</h2>
      </div>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border-2 border-amber-400"
          placeholder="Enter a number to skip"
        />
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
          className="bg-red-600 w-20 h-10"
        >
          Add {amount}
        </button>

        <button onClick={() => dispatch(loggedValue())}>Log Value</button>
      </div>
    </div>
  );
}

export default App;
