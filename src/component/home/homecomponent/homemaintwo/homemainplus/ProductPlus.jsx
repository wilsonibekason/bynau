import React from "react";
import { imageCardTwo, iphonepro } from "../../../../../assets/homeassets";
import { styles } from "../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";
const ProductPlusCard = () => {
  const { flexCol, flexRowCenter, flexCenter } = flexLayout;
  const { mainText, mainTextCustom } = textStyles;
  const { transitionLight } = styles;
  return (
    <>
      <div
        className={`w-[16%]  h-60 max-h-64
       flex-shrink-0 snap-center`}
      >
        {/*  ${testContainer} */}
        <div
          className={`h-full max-h-full w-full max-w-full ${flexCol} space-y-1`}
        >
          <div
            className={`h-eight max-h-eight relative bg-bgcolor hover:bg-[#fffefe] ${transitionLight} rounded-t shadow-sm cursor-zoom-in `}
          >
            {/* bg-[#ddd8d8] */}
            <img
              src={iphonepro}
              alt=""
              className={`w-full max-w-full h-full object-contain bg-center`}
            />
          </div>
          <div className={`h-two max-h-two ${flexCol} cursor-pointer`}>
            <div className={`${flexRowCenter}`}>
              <div>
                <p
                  className={`${mainTextCustom} text-lg text-gray-800 font-semibold `}
                >
                  NGN 4000
                </p>
              </div>
              <div
                className={`${flexCenter} px-3 py-2 bg-darkRed ${mainText} text-white rounded-lg flex-wrap whitespace-normal`}
              >
                -50%
              </div>
            </div>
            <div>
              <p
                className={`${mainTextCustom} text-sm text-gray-400 font-medium `}
              >
                500 orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ProductPlus = () => {
  const { HorizontalScrollCustom } = styles;
  return (
    <>
      <div className={` h-60`}>
        <div className={`${HorizontalScrollCustom} h-full gap-x-2`}>
          <ProductPlusCard />
          <ProductPlusCard />
          <ProductPlusCard />
          <ProductPlusCard />
          <ProductPlusCard />
          <ProductPlusCard />
          <ProductPlusCard />
          <ProductPlusCard />
          <ProductPlusCard />
        </div>
      </div>
    </>
  );
};

export default ProductPlus;
