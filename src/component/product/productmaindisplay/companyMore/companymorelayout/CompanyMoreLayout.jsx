import classNames from "classnames";
import React from "react";
import { styles } from "../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import CompanyMoreLayoutLeft from "./companymorelayoutleft/LayoutLeft";
import CompanyMoreLayoutRight from "./companymorelayoutright/LayoutRight";

const CompanyMoreLayout = () => {
  const { XBoxFull, containerWrapper } = styles;
  const { flexCol, flexRow } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={classNames(`w-laptop`)}>
        <div className={classNames(`${XBoxFull} ${flexRow} gap-x-2`)}>
          <div className={classNames(`w-full max-w-[200px]  `)}>
            <CompanyMoreLayoutLeft />
          </div>
          <div
            className={classNames(
              `max-w-[784px] md:max-w-[784px] lg:max-w-[1084px] w-full`,
              `${containerWrapper}`
            )}
          >
            <CompanyMoreLayoutRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyMoreLayout;
