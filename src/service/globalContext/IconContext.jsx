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
  AiOutlineMessage,
  AiOutlineStar,
} from "react-icons/ai";
import { BiDownArrow, BiHome, BiPlus } from "react-icons/bi";
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
  BsWhatsapp,
} from "react-icons/bs";
import {
  MdOutlinePerson,
  MdOutlineArrowRight,
  MdComputer,
  MdOutlineToys,
  MdOutlineSportsVolleyball,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import {
  IoMdMan,
  IoMdWoman,
  IoMdPhonePortrait,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
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
import { GrStar, GrFacebookOption } from "react-icons/gr";
import { HiMinus, HiOutlineDotsHorizontal } from "react-icons/hi";
import { ImStarFull } from "react-icons/im";
// import {CiHeart} from "react-icons/"

export const IconGlobalContext = createContext({});

export const IconProvider = ({ children }) => {
  const [onAuthModal, setOnAuthModal] = useState(true);
  const [page, setPage] = useState(1);
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
        BiPlus,
        AiOutlineMessage,
        AiOutlineStar,
        ImStarFull,
        MdOutlineCheckBoxOutlineBlank,
        IoIosArrowForward,
        IoIosArrowBack,
        HiOutlineDotsHorizontal,
        GrFacebookOption,
        BsWhatsapp,
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
        page,
        setPage,
      }}
    >
      {children}
    </IconGlobalContext.Provider>
  );
};

export const useIcons = () => useContext(IconGlobalContext);
