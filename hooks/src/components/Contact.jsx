import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

function Contact() {
  //   const phone = useContext(AppContext);
  const { phone } = useContext(AppContext);
  //   console.log(phone + name);

  return (
    <div>
      <h2>Contact</h2>
      {/* <h3>Name : {name}</h3> */}
      <h3>Phone : {phone}</h3>
    </div>
  );
}

export default Contact;
