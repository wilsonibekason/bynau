import classNames from "classnames";
import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";

const HomeSidebar = () => {
  const {} = textStyles;
  const { flexCol } = flexLayout;
  const { boxFull } = styles;
  return (
    <>
      <div className={classNames(`${boxFull} ${flexCol}`)}></div>
    </>
  );
};

export default HomeSidebar;
