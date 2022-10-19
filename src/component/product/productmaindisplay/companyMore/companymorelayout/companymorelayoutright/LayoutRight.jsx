import React from "react";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  fontStyles,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const CompanyMoreLayoutRight = () => {
  const {} = styles;
  const {} = flexLayout;
  const {} = textStyles;
  const {} = fontStyles;
  return (
    <>
      <div className={classNames(`w-full rounded-md bg-white`)}>
        <div className={classNames(`max-w-[984px] w-full`)}>
          {/* layout Header Tabs */}
          <div>
            <ul
              className={classNames(
                `border-b border-solid border-[#d8d8d8]`,
                `select-none list-none`
              )}
            ></ul>
          </div>
          {/* layout Body */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CompanyMoreLayoutRight;
