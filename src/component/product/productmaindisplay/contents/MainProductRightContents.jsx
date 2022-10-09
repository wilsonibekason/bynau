import React from "react";
import { styles } from "../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";

const MainProductRightContents = () => {
  const { XBoxFull, containerWrapper } = styles;
  const { flexRow, flexCol } = flexLayout;
  const {} = textStyles;
  return (
    <>
      {/* <div></div> */}
      {/* poduct title */}
      <div className={`${flexCol} space-y-2`}></div>
      <div className={`mb-2 break-all`}>
        <h1 className="text-sm w-fit">
          Original Translucent Matte For Magsafe Magnetic Wireless Charging Case
          For iPhone 14 13 12 11 Pro Plus Max Solid Hard PC Cover
        </h1>
      </div>
      {/* product selling tags  */}
      <div className={`mb-2`}>
        <div className={`inline-block rounded pt-2 mr-4`}>
          <span className={`align-middle text-darkRed`}>
            NGN 1,301.16 off every NGN 13,011.6 spent
          </span>
        </div>
        <div className={`relative inline-block rounded pt-2 mr-4`}>
          <img
            src="https://ae01.alicdn.com/kf/H1a74367e677a43f7b4027d6354bd4765H.png"
            alt=""
            className={`w-4 h-4 align-middle`}
          />
          <span className={`align-middle text-darkRed`}>Extra 2% off</span>
        </div>
      </div>
    </>
  );
};

export default MainProductRightContents;
