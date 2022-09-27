import React from "react";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { featuredCategoriesImages } from "../../../../../../utils/binauData";

const FeaturedCardTwo = () => {
  const { testContainer, containerWrapper } = styles;
  const { flexCol, flexRow, flexRowCenter, flexColStart } = flexLayout;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div className={`w-full h-full  ${flexRow} gap-x-4`}>
        <div className={` h-[100%] w-five ${flexCol} gap-y-4`}>
          {/* container one */}
          <div
            className={`w-full h-five  bg-white p-2  rounded-lg shadow-sm hover:shadow-lg `}
          >
            <div className={`w-full h-full ${flexCol} gap-y-1 `}>
              <div className={`w-full h-[18%] `}>
                <p
                  className={`${mainTextCustom} text-sm text-gray-800 font-semibold`}
                >
                  Tech
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
          <div className={`w-full h-five bg-white p-2  rounded-lg shadow  `}>
            <div className={`w-full h-full ${flexCol} gap-y-1`}>
              <div className={`w-full h-[18%] `}>
                <p
                  className={`${mainTextCustom} text-sm text-gray-800 font-semibold`}
                >
                  Sports
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
        <div className={` h-[100%] w-five ${flexCol} gap-y-4`}>
          <div className={`w-full h-five bg-white p-2  rounded-lg shadow `}>
            <div className={`w-full h-full ${flexCol} gap-y-1`}>
              <div className={`w-full h-[18%] `}>
                <p
                  className={`${mainTextCustom} text-sm text-gray-800 font-semibold`}
                >
                  Home
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
          <div className={`w-full h-five ${containerWrapper} `}>
            <div className={`w-full h-full ${flexCol} gap-y-1`}>
              <div className={`w-full h-[18%] `}>
                <p
                  className={`${mainTextCustom} text-sm text-gray-800 font-semibold`}
                >
                  Kids
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
      </div>
    </>
  );
};

export default FeaturedCardTwo;
