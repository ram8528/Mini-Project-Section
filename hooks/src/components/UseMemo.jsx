import React, { useMemo, useState } from "react";

// useMemo returns a memoized value
// useCallback returns a memoized function

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation done!");
    return Math.pow(num, 3);
  }

  //   const result = cubeNum(number);
  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]); // it is preventing cubeNum not be called(renderd) so much times as in the above code done  only run when number is being changed and re-calculated

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>Cube of number is {result}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter++
      </button>
      <h1>Counter : {counter}</h1>
    </>
  );
}

export default UseMemo;
