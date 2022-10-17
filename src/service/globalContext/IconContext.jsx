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
  BsPlus,
  BsHeart,
} from "react-icons/bs";
import {
  MdOutlinePerson,
  MdOutlineArrowRight,
  MdComputer,
  MdOutlineToys,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoMdMan, IoMdWoman, IoMdPhonePortrait } from "react-icons/io";
import { GiJeweledChalice, GiMirrorMirror, GiTyre } from "react-icons/gi";
import { SiStmicroelectronics } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import {
  RiArrowRightSFill,
  RiWhatsappFill,
  RiArrowDropDownLine,
  RiSpaceShipLine,
} from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {
  FaCrown,
  FaCarSide,
  FaFacebookF,
  FaFacebookSquare,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrStar } from "react-icons/gr";
import { HiMinus } from "react-icons/hi";
// import {CiHeart} from "react-icons/"

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
        BsHeart,
        MdOutlineArrowRight,
        // CiHeart,
        BsCart3,
        FiSearch,
        AiOutlineMenuFold,
        FaCrown,
        AiFillStar,
        AiOutlineDollarCircle,
        FaCarSide,
        AiOutlineCreditCard,
        RiSpaceShipLine,
        BsShieldCheck,
        BsPeople,
        AiFillAndroid,
        BsApple,
        AiOutlineClose,
        FaFacebookSquare,
        BsPlus,
        RiArrowDropDownLine,
        HiMinus,
        ///
        FcGoogle,
        BsTwitter,
        FaFacebookF,
        RiWhatsappFill,
        BsInstagram,
        GrStar,
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
