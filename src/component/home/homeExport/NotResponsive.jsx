import React from "react";
import cx from "classnames";
import styles, {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";

const NotResponsive = () => {
  const { flexCenter } = flexLayout;
  const { boxFull } = styles;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div
        className={cx(
          `m-0 p-0 box-border`,
          `${boxFull}`,
          `block md:block lg:hidden relative`
        )}
      >
        <div className={cx(`${flexCenter} align-middle w-full h-full`)}>
          <div className={`h-20 w-72  border `}>
            <div className={`${boxFull} ${flexCenter}`}>
              <h1 className={`${mainTextCustom}  max-w-nine`}>
                Please This Website is only available in Desktop / PC
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotResponsive;
