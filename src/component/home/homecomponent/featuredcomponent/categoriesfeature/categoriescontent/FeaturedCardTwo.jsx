import React from "react";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import { flexLayout } from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const FeaturedCardTwo = () => {
  const { testContainer } = styles;
  const { flexCol, flexRow, flexRowCenter } = flexLayout;
  return (
    <>
      <div className={`w-full h-full bg-gray-400 ${flexRow} gap-x-4`}>
        <div className={`${testContainer} h-[100%] w-five ${flexCol} gap-y-4`}>
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
        <div className={`${testContainer} h-[100%] w-five ${flexCol} gap-y-4`}>
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
      </div>
    </>
  );
};

export default FeaturedCardTwo;
