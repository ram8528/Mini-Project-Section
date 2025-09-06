import React from "react";
import { useState, useEffect } from "react";

const UseEffect = () => {
  //useEffect(cb,d)   // dependency is optional([])
  const [count, setCount] = useState(0);
  //1.   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   });   // in every 1s it will get loaded

  //2.   useEffect(() => {
  //     setTimeout(() => {
  //       console.log(count);
  //       setCount((count) => count + 2);
  //     }, 1000);     // => 4
  //   }, []); // using an empty error it will get loaded only once
  //   First mount
  // Schedules timeout → after 1s logs 0, sets count → 2.

  // Unmount + Remount (StrictMode check)
  // Schedules another timeout → after 1s logs 0, sets count → 4.

  //3.  useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // console.log(count);
  //     setCount((count) => count + 1);
  //   }, 1000); // execute cb function only once
  //   return () => clearTimeout(timer);
  // }, []);

  const [name, setName] = useState("Ram");
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count, name]); // everytime when name/count get changed rendering would happen
  // should need to wrap in strict mode or return like above to start from initial

  return (
    <>
      <h1>UseEffect Uses</h1>
      <h2>I've rendered {count} times!</h2>
    </>
  );
};

export default UseEffect;
