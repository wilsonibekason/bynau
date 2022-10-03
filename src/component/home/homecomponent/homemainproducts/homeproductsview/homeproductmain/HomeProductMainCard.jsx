import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const HomeProductMainCard = () => {
  const { containerWrapper, boxFull, imageCustom } = styles;
  const { mainText, mainTextCustom } = textStyles;
  const { flexCol, flexRowCenter } = flexLayout;
  const { FaCrown, AiFillStar } = useIcon();

  return (
    <>
      <div
        className={`w-[16%] h-[350px] shadow-sm hover:shadow-lg rounded-lg bg-white`}
      >
        <div className={`${boxFull} ${flexCol}`}>
          <div className={`w-full h-six bg-bgcolor rounded-t-lg p-px`}>
            <div className={`${boxFull}  `}>
              <img
                src=" https://ae01.alicdn.com/kf/S8a44b3fd529b455890be80918c156f4e4/Short-Bob-T-Part-Lace-Front-Wig-Human-Hair-Wigs-For-Women-Brazilian-Straight-Bob-4X1.jpg_220x220xz.jpg_.webp"
                alt=""
                className={`${imageCustom} max-w-full bg-center `}
              />
            </div>
          </div>
          <div className={`w-full h-four p-2`}>
            <div className={`${boxFull} ${flexCol} justify-start space-y-2`}>
              <div className={`${flexCol} space-y-1.5`}>
                <div className={`line-clamp-1`}>
                  <p className={`${mainText} `}>
                    Winter Glves waterproof the best of the best
                  </p>
                </div>
                <div className={`${flexRowCenter} space-x-2`}>
                  <FaCrown size={12} className={`text-goldDeep`} />
                  <p
                    className={`${mainTextCustom} text-goldDeep text-[11px] font-thin`}
                  >
                    Top Selling in AliExpress
                  </p>
                </div>
              </div>
              <div className={`${flexCol} space-y-1.5`}>
                <div>
                  <p className={`${mainText} `}>
                    NGN<span className={`text-lg text-gray-800`}>275.</span>
                    <span>30</span>
                  </p>
                </div>
                <div>
                  <p className={`${mainText} text-darkRed capitalize`}>
                    New user bonus
                  </p>
                </div>
                <div className={`${flexRowCenter} space-x-1`}>
                  <p className={`${mainText}`}>7000 sold </p>
                  <AiFillStar className={`text-darkRed`} />
                  <p className={`${mainText}`}>3.7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductMainCard;
