import { createContext, useContext } from "react";
/// icons importation
import { AiOutlineHeart } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import { GiUsaFlag } from "react-icons/gi";
import { BsPhone } from "react-icons/bs";
import { MdOutlinePerson } from "react-icons/md";
export const IconGlobalContext = createContext({});

export const IconProvider = ({ children }) => {
  return (
    <IconGlobalContext.Provider
      value={{
        BiDownArrow,
        GiUsaFlag,
        BsPhone,
        MdOutlinePerson,
        AiOutlineHeart,
      }}
    >
      {children}
    </IconGlobalContext.Provider>
  );
};

export const useIcons = () => useContext(IconGlobalContext);
