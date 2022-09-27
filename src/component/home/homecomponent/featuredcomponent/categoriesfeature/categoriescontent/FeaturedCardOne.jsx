import React from "react";
import styles, {
  flexLayout,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const FeaturedCardOne = () => {
  const { flexCol, flexRow, flexRowCenter } = flexLayout;
  const { testContainer } = styles;
  return (
    <>
      <main className={`w-full h-full bg-gray-500 ${flexCol}`}>
        <div className={`h-four ${testContainer}`}></div>
        <div className={` h-six ${testContainer} px-2 pb-2`}>
          <div className={`w-full h-full ${flexRow}`}>
            <div className={`${testContainer} h-[100%] w-five`}></div>
            <div className={`${testContainer} h-[100%] w-five ${flexCol}`}>
              <div className={`w-full h-five ${testContainer}`}></div>
              <div className={`w-full h-five ${testContainer}`}></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FeaturedCardOne;
