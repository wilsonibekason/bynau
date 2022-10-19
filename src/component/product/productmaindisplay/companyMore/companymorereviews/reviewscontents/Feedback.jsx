import classNames from "classnames";
import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const Feedback = () => {
  const {
    flexCenter,
    flexCol,
    flexRowCenter,
    flexRowCenterBetween,
    flexRowBetween,
  } = flexLayout;
  const { containerWrapper, borderR, fullBox } = styles;
  const { RiArrowDropDownLine, MdOutlineCheckBoxOutlineBlank } = useIcon();
  const { mainText, textLayout } = textStyles;
  //:TODO: // add Rafdix dropdown UI
  return (
    <>
      <div className={classNames(`${flexCol} space-y-px`)}>
        {/*  */}
        <div className={`bg-bgcolor`}>
          <div className={classNames(``, `h-10 w-[700px] `, ` px-3`)}>
            <div
              className={classNames(`${flexRowCenter} h-full w-full space-x-4`)}
            >
              {/* dropdown Component */}
              <div
                className={classNames(`${flexRowCenter} w-28 space-x-2 -px-2`)}
              >
                <p className={`${mainText} ${textLayout}`}> All Stars (240) </p>
                <RiArrowDropDownLine />
              </div>
              {/*  */}
              <div className={`${borderR}`} />
              <div
                className={`w-24 h-8 border border-solid border-darkWhite rounded ${flexCenter} bg-white`}
              >
                <p className={classNames(`${mainText}`, `${textLayout}`)}>
                  {" "}
                  Photos (22)
                </p>
              </div>
              <div
                className={classNames(
                  `w-40 h-8 border border-solid border-darkWhite rounded ${flexCenter} bg-white`
                )}
              >
                ,
                <p className={classNames(`${mainText} ${textLayout}`)}>
                  Additional Feedback
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classNames(`bg-bgcolor h-10`)}>
          <div className={`${flexRowCenterBetween} h-full px-3`}>
            <div className={classNames(`w-[600px] h-full `)}>
              <div className={classNames(`${flexRowCenter} w-full h-full`)}>
                <div className={classNames(`h-8 w-40 whitespace-nowrap`)}>
                  <div className={`${flexRowCenter} ${fullBox} space-x-1`}>
                    <MdOutlineCheckBoxOutlineBlank />
                    <p className={`${mainText}`}>Only from your country</p>
                  </div>
                </div>
                <div className={classNames(`h-8 w-40 whitespace-nowrap`)}>
                  <div className={`${flexRowCenter} ${fullBox} space-x-1`}>
                    <MdOutlineCheckBoxOutlineBlank />
                    <p className={`${mainText}`}>Translate to english</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-[150px]`}>
              <div className={`${flexCenter}`}>
                <div
                  className={`h-8 w-full  whitespace-nowrap border border-solid rounded border-darkWhite p-2`}
                >
                  <div className={classNames(`${flexRowCenterBetween} h-full`)}>
                    <p className={`${mainText} whitespace-nowrap`}>Sort by</p>
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
