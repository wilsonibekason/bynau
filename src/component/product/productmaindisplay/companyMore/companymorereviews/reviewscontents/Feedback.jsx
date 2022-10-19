import classNames from "classnames";
import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const Feedback = () => {
  const { flexCenter, flexCol, flexRowCenter } = flexLayout;
  const {} = styles;
  const { RiArrowDropDownLine } = useIcon();
  return (
    <>
      <div className={classNames(`${flexCol} space-y-px`)}>
        <div
          className={classNames(`bg-bgcolor`, `h-10`, `${flexRowCenter} px-2`)}
        >
          <div></div>
          <div>fkfk</div>
          <div>fkfk</div>
          <div>fkfk</div>
        </div>
        <div className={classNames(`bg-bgcolor`)}>jffjj</div>
      </div>
    </>
  );
};

export default Feedback;
