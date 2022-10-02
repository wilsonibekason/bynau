import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import HomeProductMain from "./homeproductmain/HomeProductMain";

const HomeProductViewLayout = () => {
  const { flexCol, flexCenter, flexRowCenter, flexColCenter } = flexLayout;
  const { borderMain, boxFull } = styles;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div className={`${flexCol} my-6 space-y-4`}>
        <div className={`${flexCenter}`}>
          <div className={`${flexRowCenter} space-x-5`}>
            <div className={`${borderMain}`} />
            <div>
              <h2
                className={`${mainTextCustom} text-2xl text-gray-700 font-semibold`}
              >
                More To Love
              </h2>
            </div>
            <div className={`${borderMain}`} />
          </div>
        </div>
        {/* main prduct display */}
        <div className={`${boxFull} `}>
          <HomeProductMain />
        </div>
      </div>
    </>
  );
};

export default HomeProductViewLayout;
