import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffect() {
  useEffect(() => {
    console.log("Use Effect called");
  });

  useLayoutEffect(() => {
    console.log("UseLayoutEffect Called");
  });
  return (
    <div>
      <h1>UseLayoutEffect</h1>
      {Array(40000)
        .fill("")
        .map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </div>
  );
}

export default UseLayoutEffect;
