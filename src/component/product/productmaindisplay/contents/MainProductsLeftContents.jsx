import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { playBTN } from "./imgexport";
const ImagesWrap = () => {
  const { flexCenter } = flexLayout;
  return (
    <>
      <li
        className={`inline-block align-middle drop-shadow-md rounded cursor-pointer mr-3`}
      >
        <div className={`w-[54px] h-[54px] ${flexCenter} relative`}>
          <img
            src="https://ae01.alicdn.com/kf/Saeb7402c2b87476fa267161f0c4300cbJ/Original-Translucent-Matte-For-Magsafe-Magnetic-Wireless-Charging-Case-For-iPhone-14-13-12-11-Pro.jpg_50x50.jpg_.webp"
            alt=""
            className={`max-w-[54px] max-h-[54px]`}
          />
        </div>
      </li>
    </>
  );
};
const MainProductsLeftContents = () => {
  const { flexCenter } = flexLayout;
  const {} = textStyles;
  const { XBoxFull, containerWrapper } = styles;
  return (
    <>
      <div className={`w-[450px] overflow-hidden bg-white`}>
        {/* video or image container */}
        <div className={` w-[450px] h-[450px] relative none ${flexCenter} `}>
          <img
            src="https://ae01.alicdn.com/kf/Saeb7402c2b87476fa267161f0c4300cbJ/Original-Translucent-Matte-For-Magsafe-Magnetic-Wireless-Charging-Case-For-iPhone-14-13-12-11-Pro.jpg_Q90.jpg_.webp"
            alt=""
            className={`max-h-full absolute top-0 left-0`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -my-6 inline-block w-12 h-12 bg-no-repeat bg-contain cursor-pointer`}
            style={{
              backgroundImage: `url(${playBTN})`,
            }}
          />
        </div>
        {/* image view magnifier wrapper */}
        {/* images view wrapper */}
        <div className={`w-full overflow-x-auto`}>
          <div className={`bg-white p-0 mt-4 mb-5 list-none text-center`}>
            <ul className={`list-none`}>
              <ImagesWrap />
              <ImagesWrap />
              <ImagesWrap />
              <ImagesWrap />
              <ImagesWrap />
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MainProductsLeftContents;
