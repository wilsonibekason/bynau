import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { viewDisplayData } from "../../../../../../utils/binauData";
import ViewCarousel from "./ViewCarousel";

const ViewDisplay = () => {
  const { flexCol, flexCenter, flexRowCenter } = flexLayout;
  const {} = styles;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div>
        <div className={`${flexCol} space-y-4`}>
          <div className={`${flexRowCenter} space-x-6`}>
            {viewDisplayData.map((item, index) => (
              <p
                className={`${mainTextCustom} text-sm font-semibold text-gray-700 hover:text-darkRed cursor-pointer `}
                key={item.id}
              >
                {item.name}
              </p>
            ))}
          </div>
          <div>
            <ViewCarousel />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ViewDisplay;
