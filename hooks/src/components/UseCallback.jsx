import React, { useCallback, useState } from "react";
import Header from "./Header";

function UseCallback() {
  const [count, setCount] = useState(0);

  //   const newFun = () => {};
  const newFun = useCallback(() => {}, [count]);
  return (
    <>
      <Header newFun={newFun} />
      {/* again and again renders so now we use
      usecallback */}
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click here</button>
    </>
  );
}

export default UseCallback;
