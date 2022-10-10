import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const RecommendedForYou = () => {
  const { flexCenter, flexRow, flexCol } = flexLayout;
  const { containerWrapper, boxFull, transitionLight } = styles;
  const { mainText, mainText2 } = textStyles;
  return (
    <>
      <div
        className={`align-middle text-center ${mainText2} tracking-wider h-12 ${flexCenter}`}
      >
        Recommended Products
      </div>
      <ul className={`${flexCol} ${flexCenter} gap-y-1`}>
        {Array(3)
          .fill()
          .map((index) => (
            <li className={`h-40 w-32 cursor-pointer`} key={index}>
              <span className={`${boxFull}`}>
                <div
                  className={`h-28 w-full ${transitionLight} rounded border border-darkRed shadow-sm ${flexCenter} `}
                >
                  <div className={`h-20 w-20`}>
                    <img
                      src="https://ae01.alicdn.com/kf/Saeb7402c2b87476fa267161f0c4300cbJ/Original-Translucent-Matte-For-Magsafe-Magnetic-Wireless-Charging-Case-For-iPhone-14-13-12-11-Pro.jpg_220x220q90.jpg_.webp"
                      alt=""
                      className={`max-w-16 max-h-16 object-contain`}
                    />
                  </div>
                </div>
                <div className={`h-10 w-full  ${flexCenter}`}>
                  <span className={`${mainText2} tracking-wider font-bold`}>
                    NGN 3,000
                  </span>
                </div>
              </span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default RecommendedForYou;
