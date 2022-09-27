import React from "react";
import { styles } from "../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import FeaturedCardOne from "./categoriescontent/FeaturedCardOne";
import FeaturedCardThree from "./categoriescontent/FeaturedCardThree";
import FeaturedCardTwo from "./categoriescontent/FeaturedCardTwo";

const FeaturedCategoriesLayout = () => {
  const { testContainer } = styles;
  const {
    flexCol,
    flexMainLayoutOne,
    flexMainChildOne,
    flexMainChildThree,
    flexMainChildTwoMain,
    flexMainChildThreeMain,
    flexMainChildOneMain,
    flexCenter,
    flexRowCenter,
  } = flexLayout;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div className={`${flexCol} space-y-3`}>
        <div className={`${flexCenter}`}>
          <div className={`${flexRowCenter} space-x-2`}>
            <div className={`border-t border-gray-300 w-28 h-1`} />
            <h2
              className={`${mainTextCustom} text-xl text-gray-800 font-bold `}
            >
              Featured Categories
            </h2>
            <div className={`border-t border-gray-300 w-28 h-1`} />
          </div>
        </div>

        {/* magic comes to reality */}
        <div className={` h-64`}>
          <div className={`h-full ${flexMainLayoutOne}`}>
            <div className={`${flexMainChildOneMain}  h-64`}>
              <FeaturedCardOne />
            </div>
            <div className={`${flexMainChildTwoMain} h-64`}>
              <FeaturedCardTwo />
            </div>
            <div className={`${flexMainChildThreeMain}  h-64`}>
              <FeaturedCardThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCategoriesLayout;
