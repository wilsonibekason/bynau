import classNames from "classnames";
import React from "react";
import { styles } from "../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  fontLayout,
  textStyles,
} from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import Feedback from "./reviewscontents/Feedback";
import ReviewsChart from "./reviewscontents/ReviewsChart";
import ReviewsComments from "./reviewscontents/ReviewsComments";
import ReviewsPagination from "./reviewscontents/ReviewsPagination";

const CompanyMoreReviews = () => {
  const { XBoxFull } = styles;
  const { flexCol } = flexLayout;
  const { mainTextCustom } = textStyles;
  const {} = fontLayout;
  return (
    <>
      <div className={classNames(`${XBoxFull} ${flexCol}`)}>
        <div className={`px-4 pt-4 ${flexCol} space-y-3`}>
          <div
            className={classNames(
              `${mainTextCustom} font-bold capitalize break-words text-ellipsis overflow-hidden tracking-tighter`,
              `text-md items-start `
            )}
          >
            Customer's Reviews (204)
          </div>
          {/* Review Chart */}
          <ReviewsChart />
        </div>
        <div className={`${XBoxFull} bg-white`}>
          <Feedback />
        </div>
        <div className={classNames(`${XBoxFull}`)}>
          {Array(10)
            .fill()
            .map((i) => (
              <ReviewsComments key={i} />
            ))}
        </div>
        <div className={`${XBoxFull} bg-white`}>
          <ReviewsPagination />
        </div>
      </div>
      <div>CompanyMoreReviews</div>
    </>
  );
};

export default CompanyMoreReviews;
