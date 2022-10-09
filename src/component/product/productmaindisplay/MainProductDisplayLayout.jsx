import React from "react";
import { styles } from "../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";

const MainProductDisplayLayout = () => {
  const { XBoxFull, containerWrapper } = styles;
  const {} = textStyles;
  const { flexRowCenter, flexRow } = flexLayout;
  return (
    <>
      <div className={`${XBoxFull}`}>
        <div className={`${flexRow} basis-full `}>
          <div className={`w-[7in] ${containerWrapper} h-[15in]`}></div>
          <div className={`w-[13in] ${containerWrapper} h-[15in]`}></div>
        </div>
      </div>
    </>
  );
};

export default MainProductDisplayLayout;
