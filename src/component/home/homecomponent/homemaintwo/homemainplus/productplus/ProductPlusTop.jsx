import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const ProductPlusTop = () => {
  const { flexRowBetween, flexRowCenter } = flexLayout;
  const { transition } = styles;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div className={`${flexRowBetween}`}>
        <div className={`${flexRowCenter}`}>
          <div className="w-[600px]">
            <img
              src="https://ae01.alicdn.com/kf/Sb5ed93584250473dbcdd4faf7000100dD.png_.webp"
              alt=""
              className={`w-full max-w-full`}
            />
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

export default ProductPlusTop;
