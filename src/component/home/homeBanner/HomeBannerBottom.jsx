import React from "react";
import { useIcon } from "../../../hooks/stateContext/IconContextProvider";
import { useIcons } from "../../../service/globalContext/IconContext";
import styles, {
  colorStyles,
  flexLayout,
  hoverStyles,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";

const HomeBannerBottom = () => {
  const { bgDarkWhite, GrayNormal } = colorStyles;
  const { BiDownArrow, GiUsaFlag, BsPhone } = useIcon();
  const { flexRowCenterBetween, flexRowCenter } = flexLayout;
  const { marginXlayout, borderAroundLight, borderR, transition } = styles;
  const { mainText } = textStyles;
  const { redTextGroup } = hoverStyles;
  return (
    <>
      <div className={`${bgDarkWhite} ${borderAroundLight} py-4`}>
        <div className={`${flexRowCenterBetween} ${marginXlayout}`}>
          <div></div>
          <div className={` ${flexRowCenter} space-x-1`}>
            <div className={`${flexRowCenter} space-x-1`}>
              <p className={`${mainText}`}>Sell on Aliexpress</p>
              <BiDownArrow className={`${GrayNormal}`} size={10} />
            </div>
            <div className={`${borderR}`} />
            <div className={`${flexRowCenter} space-x-1`}>
              <p className={`${mainText}`}>Help</p>
              <BiDownArrow className={`${GrayNormal}`} size={10} />
            </div>
            <div>
              <p className={`${mainText}`}>Buyer Protection</p>
            </div>
            <div className={`${flexRowCenter} space-x-1`}>
              <p className={`${mainText}`}>Phone</p>
              <BsPhone className={`${GrayNormal}`} size={10} />
            </div>
            <div className={`${flexRowCenter} space-x-1 group`}>
              <GiUsaFlag
                className={`${redTextGroup} ${transition}`}
                size={15}
              />
              <p className={`${mainText} ${redTextGroup}`}>/</p>
              <p className={`${mainText} ${redTextGroup}`}>English</p>
              <p className={`${mainText} ${redTextGroup}`}>/</p>
              <p className={`${mainText} uppercase ${redTextGroup}`}>NGN</p>
              <BiDownArrow className={`${GrayNormal}`} size={10} />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBannerBottom;
