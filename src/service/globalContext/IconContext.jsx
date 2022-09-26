import { createContext, useContext } from "react";
/// icons importation
import { AiOutlineHeart, AiOutlineMenuFold } from "react-icons/ai";
import { BiDownArrow, BiHome } from "react-icons/bi";
import { GiUsaFlag } from "react-icons/gi";
import { BsPhone, BsCart3 } from "react-icons/bs";
import {
  MdOutlinePerson,
  MdComputer,
  MdOutlineToys,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoMdMan, IoMdWoman, IoMdPhonePortrait } from "react-icons/io";
import { GiJeweledChalice, GiMirrorMirror, GiTyre } from "react-icons/gi";
import { SiStmicroelectronics } from "react-icons/si";
import { VscTools } from "react-icons/vsc";

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
        BsCart3,
        FiSearch,
        AiOutlineMenuFold,
        //
        IoMdMan,
        IoMdWoman,
        BiHome,
        MdComputer,
        MdOutlineToys,
        MdOutlineSportsVolleyball,
        IoMdPhonePortrait,
        GiJeweledChalice,
        GiMirrorMirror,
        GiTyre,
        SiStmicroelectronics,
        VscTools,
        //
      }}
    >
      {children}
    </IconGlobalContext.Provider>
  );
};

export const useIcons = () => useContext(IconGlobalContext);
