import React, { useEffect, useState } from "react";
import UseLocalStorage from "./UseLocalStorage";

function CustomHook() {
  //   const [name, setName] = useState(
  //     localStorage.getItem("username") ? localStorage.getItem("username") : ""
  //   );

  //   useEffect(() => {
  //     localStorage.setItem("username", name);
  //   }, [name]);

  const [name, setName] = UseLocalStorage("username", "");

  const [id, setId] = UseLocalStorage("userid", "");
  return (
    <>
      <div>CustomHook</div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello , {name} !</h2>

      <input
        type="text"
        placeholder="Enter id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h2>ID : {id}</h2>
    </>
  );
}

export default CustomHook;
