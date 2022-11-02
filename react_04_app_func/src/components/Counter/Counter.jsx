import React, { Fragment, useState, useEffect } from "react";
import "./style.sass";

export default function Counter() {
  const [counter, setCounter] = useState(10); // [10, f(() => {})]
  const [address, setAddress] = useState({
    country: `Ukraine`,
    city: `Kyiv`,
    zip: 10000,
  });
  const [x, setX] = useState(1);

  const decCounter = () => {
    setCounter((prevState) => prevState - 1);
  };

  useEffect(() => {
    console.log(`componentDidMount`);

    // setTimeout(() => {
    //     setCounter(prevState => prevState+1);
    // },1000);

    return () => {
        console.log(`Counter will unmount`);
    }
  }, []);

//   useEffect(() => {
//     console.log(`useEffect for count`);
//   }, [counter])

//   useEffect(() => {
//     console.log(`useEffect for x`);
//   }, [x])

  //   setInterval(() => {
  //     setCounter(prevState => prevState+1);
  //   }, 100);

  //   setTimeout(() => {
  //     setAddress(prevState => ({...prevState, country: `Poland`}));
  //   }, 1500);

  //   setTimeout(() => {
  //     setAddress(prevState=>({...prevState, city: `Krakow`}));
  //   }, 1500);

  //   setTimeout(() => {
  //     setAddress(prevState=>({...prevState, zip: 2222}));
  //   }, 1500);

  return (
    <Fragment>
      <div className="counter">
        <button onClick={decCounter}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter((prevState) => prevState + 1)}>
          +
        </button>
      </div>

      <hr></hr>

      <ul>
        {Object.keys(address).map((key, index) => (
          <li key={index}>
            {key}: {address[key]}
          </li>
        ))}
      </ul>

      <hr></hr>

      <p>{x} <button onClick={() => setX(prevState => prevState+1)}>Increment x</button></p>
    </Fragment>
  );
}
