import classNames from "classnames";
import React from "react";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import { flexLayout } from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const ReviewsChart = () => {
  const { containerWrapper, XBoxFull } = styles;
  const { flexRow, flexRowBetween, flexCenter } = flexLayout;
  return (
    <>
      <div className={`w-[600px] h-40 ${containerWrapper} `}>
        <div className={classNames(`w-full`, `${flexRowBetween}`)}>
          <div
            className={classNames(`w-[350px] h-20 ${containerWrapper} `)}
          ></div>
          <div className={classNames(`w-[100px] h-40 `)}>
            <div className={`${XBoxFull} h-full ${flexCenter}`}>
              <p>hello world</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsChart;
