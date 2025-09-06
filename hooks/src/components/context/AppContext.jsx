import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "8286467563";
  const name = "Ram";
  return (
    // <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
