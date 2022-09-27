import React from "react";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
const ProductDealTopTimer = () => {
  const { flexRowCenter, flexCenter } = flexLayout;
  const { mainText } = textStyles;
  const { timerTextBox } = styles;
  return (
    <>
      <div className={`${flexRowCenter} space-x-2`}>
        <div className={`${timerTextBox}`}>
          <p className={`${mainText} text-white`}>1</p>
        </div>
        <div className={`${timerTextBox}`}>
          <p className={`${mainText} text-white`}>d</p>
        </div>
        <div className={`${timerTextBox}`}>
          <p className={`${mainText} text-white`}>11</p>
        </div>
        <div>
          <p className={`${mainText} font-black text-black`}>:</p>
        </div>
        <div className={`${timerTextBox}`}>
          <p className={`${mainText} text-white`}>12</p>
        </div>
        <div>
          <p className={`${mainText} font-black text-black`}>:</p>
        </div>
        <div className={`${timerTextBox}`}>
          <p className={`${mainText} text-white`}>11</p>
        </div>
      </div>
    </>
  );
};
const ProductDealTop = () => {
  const { transition } = styles;
  const { flexRowBetween, flexRowCenter } = flexLayout;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div className={`${flexRowBetween}`}>
        <div className={`${flexRowCenter}`}>
          <div>
            <img
              src="https://ae01.alicdn.com/kf/H6a103b65f0b64afdaf4fa405254b44few/368x55.png_250x250.png_.webp"
              alt=""
              className={`w-60`}
            />
          </div>
          <div className={`${flexRowCenter} space-x-8`}>
            <h3
              className={`${mainTextCustom} text-lg text-gray-400 font-normal `}
            >
              {" "}
              Top Products with incredible price
            </h3>
            <div>
              <ProductDealTopTimer />
            </div>
          </div>
        </div>
        <div>
          <a
            className={`${mainTextCustom} text-sm text-gray-800 font-normal hover:text-darkRed ${transition} cursor-pointer`}
          >
            view more
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductDealTop;
