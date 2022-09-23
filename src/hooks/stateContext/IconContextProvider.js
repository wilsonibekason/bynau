import { useContext } from "react";
import { IconGlobalContext } from "../../service/globalContext/IconContext";
export const useIcon = () => useContext(IconGlobalContext);
