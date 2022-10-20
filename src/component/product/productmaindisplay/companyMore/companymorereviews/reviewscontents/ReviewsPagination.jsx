import classNames from "classnames";
import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
  fontLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
const PaginationItems = ({ value, active }) => {
  const { flexCenter } = flexLayout;
  return (
    <>
      <div
        className={classNames(
          `h-eight w-8 border ${flexCenter} rounded`,
          `${active && "bg-darkRed text-white"}`
        )}
      >
        <p>{value}</p>
      </div>
    </>
  );
};
const ReviewsPagination = () => {
  const { flexJusEnd, flexRowCenter, flexCenter } = flexLayout;
  const { containerWrapper, YBoxFull, XBoxFull, fullBox } = styles;
  const {} = textStyles;
  const {} = fontLayout;
  const { MdOutlineArrowRight } = useIcon();
  return (
    <>
      <div className={`h-20 w-full ${containerWrapper}`}>
        <div className={classNames(`${fullBox} `)}>
          <div className={`${flexJusEnd} h-full flex items-center`}>
            <div className={classNames(` h-12 w-[250px] border`)}>
              <div className={classNames(`${fullBox}`)}>
                <div
                  className={classNames(
                    `${flexRowCenter} justify-center space-x-2 h-full whitespace-nowrap overflow-hidden`
                  )}
                >
                  <div className={`h-eight w-8 border rounded ${flexCenter} `}>
                    <MdOutlineArrowRight />
                  </div>
                  <PaginationItems value={1} active={true} />
                  <PaginationItems value={2} />
                  <PaginationItems value={3} />
                  <PaginationItems value={4} />
                  <PaginationItems value={"..."} />
                  <div className={`h-eight w-8 border rounded ${flexCenter}`}>
                    <MdOutlineArrowRight />
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

export default ReviewsPagination;
