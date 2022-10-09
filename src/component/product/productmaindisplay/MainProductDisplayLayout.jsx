import React from "react";
import { styles } from "../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";
import MainProductRightContents from "./contents/MainProductRightContents";
import MainProductsLeftContents from "./contents/MainProductsLeftContents";

const MainProductDisplayLayout = () => {
  const { XBoxFull, containerWrapper } = styles;
  const {} = textStyles;
  const { flexRowCenter, flexRow } = flexLayout;
  return (
    <>
      <div className={`${XBoxFull} bg-white min-h-[588px]`}>
        {/* <div className={`${flexRow} basis-full `}>
          <div className={`w-[500px] ${containerWrapper} h-[15in]`}>
            <MainProductsLeftContents />
          </div>
          <div className={`w-[800px] ${containerWrapper} h-[15in]`}>
            <MainProductRightContents />
          </div>
        </div> */}
        <div className={`${flexRow}  w-[1200px] flex`}>
          <div
            className={`relative w-[450px] flex-shrink-0 ${containerWrapper} h-[1in]`}
          >
            {" "}
            <MainProductsLeftContents />
          </div>
          <div
            className={`basis-[550px] flex-grow ${containerWrapper} h-[5in] `}
          >
            <div className={`${XBoxFull} ${flexRow}`}>
              <MainProductRightContents />
              <div className="w-[200px]">
                <h1>hello</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProductDisplayLayout;
