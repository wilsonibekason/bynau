import classNames from "classnames";
import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { getArbitraryValues } from "../../../../../../utils/Random";
const Progress = () => {
  const [progress, setProgress] = React.useState(60);
  React.useEffect(() => {
    const timerId = setInterval(() => {
      const id = Math.ceil(getArbitraryValues(0, 100) / 10) * 10;
      setProgress(id);
    }, [5000]);

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, []);
  return (
    <>
      <ProgressPrimitive.Root
        value={progress}
        className={classNames(`h-1 w-seven overflow-hidden bg-bgcolor rounded`)}
      >
        <ProgressPrimitive.Indicator
          style={{
            width: `${progress}%`,
          }}
          className={classNames(`h-full bg-darkRed `)}
        ></ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>
    </>
  );
};
const ReviewsChart = () => {
  const { containerWrapper, XBoxFull } = styles;
  const { mainText2, mainText, textLayout } = textStyles;
  const { flexRow, flexRowBetween, flexCenter, flexRowCenter, flexCol } =
    flexLayout;
  const { ImStarFull } = useIcon();
  return (
    <>
      <div className={`w-[600px] h-40 `}>
        <div className={classNames(`w-full`, `${flexRowBetween}`)}>
          <div className={classNames(`w-[350px] h-40 `)}>
            <div
              className={classNames(
                `w-full h-full ${flexCol} space-y-1 justify-center`
              )}
            >
              {Array(5)
                .fill()
                .map((i) => (
                  <div
                    className={`${flexRowCenter} space-x-3 max-w-full`}
                    key={i}
                  >
                    <div className={`${mainText} ${textLayout}`}>5 Stars</div>
                    <Progress />
                    <div
                      className={classNames(
                        `border border-solid border-darkWhite w-12 h-5 rounded-sm `,
                        `${flexCenter}`
                      )}
                    >
                      <span className={`${mainText}`}>86%</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
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
