import React from "react";
import classNames from "classnames";
import { styles } from "../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";
import MainProductRightContents from "./contents/MainProductRightContents";
import MainProductsLeftContents from "./contents/MainProductsLeftContents";
import RecommendedForYou from "./contents/recommendations/RecommendedForYou";

const MainProductDisplayLayout = () => {
  const { XBoxFull, containerWrapper, YBoxFull } = styles;
  const {} = textStyles;
  const { flexRowCenter, flexRow, flexCol } = flexLayout;
  return (
    <>
      <div className={`${XBoxFull} bg-white min-h-[588px]`}>
        <div
          className={`${flexRow} w-[990px] md:w-[990px] lg:w-[1200px] flex relative `}
        >
          <div className={` w-[450px] flex-shrink-0 basis-[450px] relative`}>
            <div className={classNames(" ")}>
              {/* fixed */}
              <MainProductsLeftContents />
            </div>
          </div>
          <div className={`basis-[550px] flex-grow   `}>
            <div className={`${XBoxFull} ${flexRow}`}>
              <MainProductRightContents />
              <div className={`w-[150px] h-[500px] `}>
                <div className={`${YBoxFull} ${flexCol} space-y-3`}>
                  <RecommendedForYou />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProductDisplayLayout;
