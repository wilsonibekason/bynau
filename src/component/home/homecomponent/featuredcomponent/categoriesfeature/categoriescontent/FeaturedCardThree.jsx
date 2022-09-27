import React from "react";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import { flexLayout } from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const FeaturedCardThree = () => {
  const { testContainer } = styles;
  const { flexCol, flexRowCenter } = flexLayout;
  return (
    <>
      <div className={`${testContainer} h-[100%] w-full ${flexCol} gap-y-4`}>
        {/* container one */}
        <div className={`w-full h-five ${testContainer} p-1 `}>
          <div className={`w-full h-full ${flexCol} gap-y-3`}>
            <div className={`w-full h-two `}></div>
            <div
              className={`w-full h-eight ${flexRowCenter} gap-0 ${testContainer}`}
            >
              <div className={`${testContainer} w-[34%] `}></div>
              <div className={`${testContainer} w-[34%] `}></div>
              <div className={`${testContainer} w-[34%] `}></div>
            </div>
          </div>
        </div>
        {/* container two */}
        <div className={`w-full h-five ${testContainer} `}>
          <div className={`w-full h-full ${flexCol} gap-y-3`}>
            <div className={`w-full h-two `}></div>
            <div
              className={`w-full h-eight ${flexRowCenter} gap-0 ${testContainer}`}
            >
              <div className={`${testContainer} w-[34%] `}></div>
              <div className={`${testContainer} w-[34%] `}></div>
              <div className={`${testContainer} w-[34%] `}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCardThree;
