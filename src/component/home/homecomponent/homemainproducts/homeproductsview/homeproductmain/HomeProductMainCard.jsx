import React from "react";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const HomeProductMainCard = () => {
  const { containerWrapper, boxFull } = styles;
  const {} = textStyles;
  const { flexCol } = flexLayout;
  return (
    <>
      <div className={`w-[16%] h-[350px] ${containerWrapper}`}>
        <div className={`${boxFull} ${flexCol}`}>
          <div className={`w-full h-six ${containerWrapper}`}>
            <h2>image</h2>
          </div>
          <div className={`w-full h-four ${containerWrapper}`}>
            <h2>content</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductMainCard;
