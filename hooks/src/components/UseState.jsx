import React from "react";
import { useState } from "react";
const UseState = () => {
  // const counter = useState(0)[0];
  // const setCounter = useState(0)[1];
  // console.log(counter); // 0
  // console.log(setCounter); // function () { [native code]}

  // const [counter, setCounter] = useState(10);
  // console.log(counter);

  // const [color, setColor] = useState("Red");
  // const changeColor = () => {
  //   setColor("Blue");
  // };

  // let color = "Red";
  // const changeColor = () => {
  //   color: "Blue";
  //   console.log(color);
  // };

  // const [brand, setBrand] = useState("Ferrari");
  // const [model, setModel] = useState("Roma");
  // const [year, setYear] = useState("2025");
  // const [color, setColor] = useState("red");

  // const [car, setCar] = useState({
  //   brand: "Ferrari",
  //   model: "Roma",
  //   year: "2025",
  //   color: "red",
  // });

  // const changeColor = () => {
  //   setCar((prev) => {
  //     // instead of prev can write any name declaration will work as same => previous value
  //     return { ...prev, color: "blue" }; // spread the previous data and tthen add the new data one
  //   });
  // };

  const [count, setCount] = useState(0);

  // const increaseCount = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1); // everytime it is taking initial value as 1 so not updating
  //   setCount(count + 1);
  // };

  const increaseCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>UseState Uses</h1>
      {/* <h1>My favourite color is {color}</h1>
      <button onClick={changeColor}>Blue</button> */}

      {/* <h2>My {car.brand}</h2>
      <p>
        It is a {car.color} {car.model} of {car.year}
      </p>
      <button onClick={changeColor}>Blue</button> */}

      <h1>Initial Count : {count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </>
  );
};

export default UseState;
