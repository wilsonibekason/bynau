import classNames from "classnames";
import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
  fontLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
const PaginationItems = ({ value, active, isCollapsed }) => {
  const { flexCenter } = flexLayout;
  return (
    <>
      <div
        className={classNames(
          `h-eight w-8  ${flexCenter} rounded  `,
          `${
            active
              ? "bg-darkRed text-white cursor-default"
              : "bg-bgcolor cursor-pointer "
          }`,
          `${isCollapsed ? "bg-white" : "bg-bgcolor border"}`
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
  const {
    MdOutlineArrowRight,
    IoIosArrowBack,
    IoIosArrowForward,
    HiOutlineDotsHorizontal,
  } = useIcon();
  return (
    <>
      <div className={`h-20 w-full `}>
        <div className={classNames(`${fullBox} `)}>
          <div className={`${flexJusEnd} h-full flex items-center`}>
            <div className={classNames(` h-12 w-[250px] `)}>
              <div className={classNames(`${fullBox}`)}>
                <div
                  className={classNames(
                    `${flexRowCenter} justify-center space-x-2 h-full whitespace-nowrap overflow-hidden`
                  )}
                >
                  <button
                    className={`h-eight w-8 border rounded ${flexCenter} cursor-pointer bg-bgcolor disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed`}
                    disabled={true}
                  >
                    <IoIosArrowBack className={classNames(`text-current`)} />
                  </button>
                  <PaginationItems value={1} active={true} />
                  <PaginationItems value={2} />
                  <PaginationItems value={3} />
                  <PaginationItems value={4} />
                  <PaginationItems
                    value={<HiOutlineDotsHorizontal />}
                    isCollapsed={true}
                  />
                  <button
                    className={`h-eight w-8 border rounded ${flexCenter} cursor-pointer bg-bgcolor `}
                    // disabled={true}
                  >
                    <IoIosArrowForward />
                  </button>
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
