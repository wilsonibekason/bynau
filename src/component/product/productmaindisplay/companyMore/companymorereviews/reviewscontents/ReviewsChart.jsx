import classNames from "classnames";
import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const ReviewsChart = () => {
  const { containerWrapper, XBoxFull } = styles;
  const { mainText2 } = textStyles;
  const { flexRow, flexRowBetween, flexCenter, flexRowCenter } = flexLayout;
  const { ImStarFull } = useIcon();
  return (
    <>
      <div className={`w-[600px] h-40 ${containerWrapper} `}>
        <div className={classNames(`w-full`, `${flexRowBetween}`)}>
          <div
            className={classNames(`w-[350px] h-20 ${containerWrapper} `)}
          ></div>
          <div className={classNames(`w-[150px] h-40 `)}>
            <div
              className={`${XBoxFull} h-full ${flexCenter} flex-row whitespace-nowrap overflow-hidden space-x-2 `}
            >
              <p className={classNames(`${mainText2} font-semibold`)}>
                4.5 <span className={`text-darkWhite text-xs`}> / 5</span>
              </p>
              <div className={`${flexRowCenter}`}>
                {Array(5)
                  .fill()
                  .map((i) => (
                    <ImStarFull key={i} className="text-darkRed" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsChart;
