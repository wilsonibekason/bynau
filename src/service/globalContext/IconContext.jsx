import { createContext, useContext, useState } from "react";
/// icons importation
import {
  AiOutlineHeart,
  AiOutlineMenuFold,
  AiFillStar,
  AiOutlineDollarCircle,
  AiOutlineCreditCard,
  AiFillAndroid,
  AiOutlineClose,
} from "react-icons/ai";
import { BiDownArrow, BiHome } from "react-icons/bi";
import { GiUsaFlag } from "react-icons/gi";
import {
  BsPhone,
  BsCart3,
  BsShieldCheck,
  BsPeople,
  BsApple,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
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
import { RiArrowRightSFill, RiWhatsappFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {
  FaCrown,
  FaCarSide,
  FaFacebookF,
  FaFacebookSquare,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const IconGlobalContext = createContext({});

export const IconProvider = ({ children }) => {
  const [onAuthModal, setOnAuthModal] = useState(true);
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
        FaCrown,
        AiFillStar,
        AiOutlineDollarCircle,
        FaCarSide,
        AiOutlineCreditCard,
        BsShieldCheck,
        BsPeople,
        AiFillAndroid,
        BsApple,
        AiOutlineClose,
        FaFacebookSquare,
        ///
        FcGoogle,
        BsTwitter,
        FaFacebookF,
        RiWhatsappFill,
        BsInstagram,
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
        RiArrowRightSFill,
        CgProfile,
        setOnAuthModal,
        onAuthModal,
      }}
    >
      {children}
    </IconGlobalContext.Provider>
  );
};

export const useIcons = () => useContext(IconGlobalContext);
