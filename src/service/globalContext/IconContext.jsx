import { createContext, useContext } from "react";
/// icons importation
import { BiDownArrow } from "react-icons/bi";
import { GiUsaFlag } from "react-icons/gi";
import { BsPhone } from "react-icons/bs";
export const IconGlobalContext = createContext({});

export const IconProvider = ({ children }) => {
  return (
    <IconGlobalContext.Provider value={{ BiDownArrow, GiUsaFlag, BsPhone }}>
      {children}
    </IconGlobalContext.Provider>
  );
};

export const useIcons = () => useContext(IconGlobalContext);
