import React from "react";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { featuredCategoriesImages } from "../../../../../../utils/binauData";

const FeaturedCardThree = () => {
  const { testContainer, containerWrapper } = styles;
  const { flexCol, flexRowCenter } = flexLayout;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div className={` h-[100%] w-full ${flexCol} gap-y-4`}>
        {/* container one */}
        <div className={`w-full h-five ${containerWrapper} `}>
          <div className={`w-full h-full ${flexCol} gap-y-1`}>
            <div className={`w-full h-[18%] `}>
              <p
                className={`${mainTextCustom} text-sm text-gray-800 font-semibold`}
              >
                Fashion
              </p>
            </div>
            <div className={`w-full h-eight ${flexRowCenter} gap-x-1  `}>
              {featuredCategoriesImages.map((item) => (
                <div className={`h-20 w-[34%] rounded shadow bg-bgcolor`}>
                  <img
                    src={item.image}
                    alt=""
                    className={`w-full max-w-full h-full object-cover rounded`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* container two */}
        <div className={`w-full h-five ${containerWrapper} `}>
          <div className={`w-full h-full ${flexCol} gap-y-1`}>
            <div className={`w-full h-[18%] `}>
              <p
                className={`${mainTextCustom} text-sm text-gray-800 font-semibold`}
              >
                Maintenance and repairs
              </p>
            </div>
            <div className={`w-full h-eight ${flexRowCenter} gap-x-1  `}>
              {featuredCategoriesImages.map((item) => (
                <div className={`h-20 w-[34%] rounded shadow bg-bgcolor`}>
                  <img
                    src={item.image}
                    alt=""
                    className={`w-full max-w-full h-full object-cover rounded`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCardThree;
