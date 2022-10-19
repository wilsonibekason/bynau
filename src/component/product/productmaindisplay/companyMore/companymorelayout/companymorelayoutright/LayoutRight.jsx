import classNames from "classnames";
import React from "react";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  fontStyles,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { CompanyMoreRightLayoutTabs } from "../../../../../../utils/binauData";
const LayoutChildTabs = ({ ...props }) => {
  const { mainText2 } = textStyles;
  return (
    <>
      <li className={`inline-block`}>
        <div className={classNames(`inline-block ${mainText2} pt-2 pr-3 `)}>
          <span
            className={classNames(`relative  uppercase border-b-4 py-3.5 `)}
          >
            {title} <p>{more}</p>
          </span>
        </div>
      </li>
    </>
  );
};
const CompanyMoreLayoutRight = () => {
  const {} = styles;
  const {} = flexLayout;
  const { mainText2 } = textStyles;
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
                `select-none list-none h-11`
              )}
            >
              {/* ACTIVE HAVE A FONT WEIGHT OF 700 */}
              {CompanyMoreRightLayoutTabs.map((item, id) => (
                <LayoutChildTabs item={item} />
              ))}
            </ul>
          </div>
          {/* layout Body */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CompanyMoreLayoutRight;
