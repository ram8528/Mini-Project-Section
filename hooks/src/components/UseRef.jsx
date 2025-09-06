import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0);
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     // but there is a problem

  //     // console.log(count);
  //     setCount((prev) => prev + 1);

  //     // initial v= 0 c=0, effectrun set count=1 ->re-render -> c= 2=> re-render ->resutl in infinite re-rendering
  //   }); // it will re-render when any state changes

  //   const count = useRef(10);
  //   console.log(count); -> count.current gives value

  //   useEffect(() => {
  //     count.current = count.current + 1;
  //   });

  const inputEle = useRef();

  const btnClicked = () => {
    console.log(inputEle);
    console.log(inputEle.current);
    console.log(inputEle.current.value);

    inputEle.current.style.background = "blue";
  };

  return (
    <>
      {/* <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>

      <h1>Render COunt : {count.current}</h1> */}

      <input type="text" ref={inputEle} />
      <button onClick={btnClicked}>Click here</button>
    </>
  );
};

export default UseRef;
