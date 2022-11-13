import React, { useState } from "react";
import CounterSecond from "./CounterSecond";
import CounterThird from './CounterThird';

export default function CounterFirst() {
  const [counterFirst, setCounterFirst] = useState();

  const decrement = () => {
    setCounterFirst((prevState) => prevState - 1);
  };

  const increment = () => {
    setCounterFirst((prevState) => prevState + 1);
  };

  return (
    <div>
      CounterFirst:
      <button onClick={decrement}>-</button>
      <b>{counterFirst}</b>
      <button onClick={increment}>+</button>

      <CounterSecond liftCounter={(value) => setCounterFirst(value * 10)} />
      <CounterThird counter={counterFirst} />
    </div>
  );
}
