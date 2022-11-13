import React, {useState, useEffect} from "react";

export default function CounterSecond({liftCounter}) {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    liftCounter(counter);
  }, [counter]);

  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      CounterSecond:
      <button onClick={decrement}>-</button>
      <b>{counter}</b>
      <button onClick={increment}>+</button>
    </div>
  );
}
