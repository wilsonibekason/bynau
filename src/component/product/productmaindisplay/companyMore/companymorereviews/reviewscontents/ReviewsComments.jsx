import classNames from "classnames";
import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
  fontLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";

const ReviewsComments = () => {
  const { mainText, textLayout } = textStyles;
  const { flexCol, flexRow, flexRowCenter, flexRowBetween, flexCenter } =
    flexLayout;
  const { containerWrapper, fullBox, transitionLinear } = styles;
  const {} = fontLayout;
  const { AiFillStar } = useIcon();
  return (
    <>
      <div className={`${flexCol}`}>
        <div className={`${flexRow}`}>
          <div className={`w-[150px] h-40 ${containerWrapper} text-xs py-2`}>
            {" "}
            <div className={`${fullBox} ${flexCol} space-y-3`}>
              <p className={`${mainText} ${textLayout} font-bold`}>
                {" "}
                Aliexpress Shopper
              </p>
              <div className={`${flexRowCenter} space-x-2`}>
                <div
                  className={classNames(
                    `border border-solid border-darkWhite h-4 w-6  rounded-sm bg-gradient-to-r from-green-500 via-white to-green-500`
                  )}
                />
                <div>NG</div>
              </div>
            </div>
          </div>
          <div className={` w-[950px] h-40 ${containerWrapper}`}>
            <div className={classNames(`${fullBox} `)}>
              <div className={classNames(`h-32 w-full `)}>
                <div className={`h-full max-h-full ${flexCol} space-y-4`}>
                  {/* stars */}
                  <div className={`items-start ${flexRowCenter}`}>
                    {Array(5)
                      .fill()
                      .map((i) => (
                        <AiFillStar key={i} className={`text-darkRed`} />
                      ))}
                  </div>
                  <div
                    className={`max-w-full items-start ${flexRowCenter} space-x-3 ${mainText}`}
                  >
                    <p
                      className={classNames(
                        `${textLayout} flex text-gray-600 font-semibold`
                      )}
                    >
                      Material:{" "}
                      <span className={`text-darkWhite`}>
                        For iPhone 14 Pro
                      </span>
                    </p>
                    <p
                      className={classNames(
                        `${textLayout} flex text-gray-600 font-semibold`
                      )}
                    >
                      Color: <span className={`text-darkWhite`}>CR</span>
                    </p>
                    <p
                      className={classNames(
                        `${textLayout} flex text-gray-600 font-semibold`
                      )}
                    >
                      Logistics:{" "}
                      <span className={`text-darkWhite`}>
                        AliExpress Standard Shipping
                      </span>
                    </p>
                  </div>
                  <div
                    className={`items-start ${flexRowCenter} space-x-3 ${mainText}`}
                  >
                    <p className={classNames(`font-medium`)}>
                      A beautiful product that covers all aspects of the device
                      and gives full protection to the device{" "}
                    </p>
                    <p className={`text-darkWhite font-medium`}>
                      16 Oct 2022 10:09
                    </p>
                  </div>
                  <div className={classNames(`${flexRowBetween}`)}>
                    <div
                      className={classNames(
                        `${flexRowCenter} space-x-2 max-w-full`
                      )}
                    >
                      {Array(2)
                        .fill()
                        .map((i) => (
                          <div
                            className={classNames(
                              `relative h-[50px] w-[50px] border border-solid border-darkWhite  rounded`,
                              `hover:border-darkRed`,
                              `${transitionLinear}`
                            )}
                            key={i}
                          >
                            <a className={``}>
                              <img
                                className={classNames(
                                  `absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] align-middle`,
                                  `${transitionLinear}`
                                )}
                                src="https://ae01.alicdn.com/kf/Ae0737dd5ecc6447ab80de52323cbb8b0w.jpg"
                                alt="review_Image"
                              />
                            </a>
                          </div>
                        ))}
                    </div>
                    <div className={classNames(`${flexRowCenter} space-x-3`)}>
                      <div className={`${textLayout}`}>
                        <p className={`${mainText}`}>Helpful?</p>
                      </div>
                      <div
                        className={classNames(
                          `h-6 w-14 border border-solid border-darkWhite rounded`,
                          `${flexCenter}`
                        )}
                      >
                        <p className={`${textLayout} ${mainText}`}>Yes (0)</p>
                      </div>
                      <div
                        className={classNames(
                          `h-6 w-14 border border-solid border-darkWhite rounded`,
                          `${flexCenter}`
                        )}
                      >
                        <p className={`${textLayout} ${mainText}`}>No (0)</p>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`border-t border-solid border-darkWhite`} />
      </div>
    </>
  );
};

export default ReviewsComments;
// 4010985 006
