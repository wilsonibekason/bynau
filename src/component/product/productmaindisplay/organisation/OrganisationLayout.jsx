import React from "react";
import classNames from "classnames";
import { styles } from "../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { useIcon } from "../../../../hooks/stateContext/IconContextProvider";

const OrganisationLayout = () => {
  const { containerWrapper, XBoxFull, boxFull, YBoxFull, transitionLight } =
    styles;
  const { flexCol, flexColCenter, flexBetween, flexRow, flexCenter } =
    flexLayout;
  const { mainTextCustom, mainText, mainText2 } = textStyles;
  const { MdOutlineArrowRight } = useIcon();
  return (
    <>
      <div className={`${XBoxFull} bg-white`}>
        <div
          className={classNames(
            "h-[250px] ",
            ` w-tablet md:w-tablet lg:w-laptop`,
            `${flexCol}`
          )}
        >
          <div className={classNames(`${flexCol} ${boxFull} space-y-3`)}>
            {/* header top */}
            <div className={`h-[50px] ${containerWrapper}`}>
              <div className={classNames(`${YBoxFull} ${flexCenter}`)}>
                <h1
                  className={`${mainTextCustom} text-2xl text-ellipsis font-semibold overflow-hidden`}
                >
                  Store Name
                </h1>
              </div>
            </div>
            {/* header content */}
            <div className={classNames(`h-[200px] ${containerWrapper}`)}>
              <div
                className={classNames(
                  `${YBoxFull} w-full ${flexRow} space-x-4`
                )}
              >
                <div
                  className={classNames(
                    `w-[20%] max-w-[200px] md:w-[20%] md:max-w-[200px] lg:w-[15%] h-full overflow-hidden antialiased`,
                    `${containerWrapper} p-3`
                  )}
                >
                  <div
                    className={classNames(`${XBoxFull} ${flexCol} space-y-4`)}
                  >
                    <div
                      className={`${mainText2} h-3 font-semibold tracking-wider text-gray-800 whitespace-nowrap`}
                    >
                      Store Categories
                    </div>
                    <ul
                      className={classNames(
                        `${flexCol} space-y-2 items-start line-clamp-5`
                      )}
                    >
                      {Array(5)
                        .fill()
                        .map((i) => (
                          <li
                            className={classNames(
                              `${flexRow} items-center group whitespace-nowrap cursor-pointer`
                            )}
                            key={i}
                          >
                            <MdOutlineArrowRight
                              className={`text-gray-700 group-hover:text-darkRed`}
                            />
                            <a
                              href=""
                              className={classNames(
                                `${mainText} capitalize text-gray-800 font-semibold`,
                                transitionLight,
                                `group-hover:text-darkRed antialiased break-words whitespace-nowrap `
                              )}
                            >
                              For Iphone Case
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={classNames(
                    `w-[75%] max-w-[784px] md:w-[75%] md:max-w-[784px] lg:w-[85%] lg:max-w-[984px] h-full`,
                    `${containerWrapper}`
                  )}
                >
                  <div
                    className={classNames(
                      `${XBoxFull} bg-white pt-1 pr-5 ${flexBetween} mb-4`
                    )}
                  >
                    <div
                      className={classNames(
                        `w-[200px] relative px-3 pt-4 mb-4 bg-white`
                      )}
                    >
                      <div className={`text-left mb-2`}>
                        <div
                          className={classNames(
                            `whitespace-nowrap overflow-hidden text-sm font-medium text-ellipsis antialiased select-none max-w-[150px] inline-block`
                          )}
                        >
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="//www.aliexpress.com/store/912470651"
                            className={`text-lightGray`}
                            clk_trigger=""
                            ae_page_type="detail_page"
                            ae_page_area="store_left"
                            ae_button_type="view_my_store"
                            ae_object_type="product"
                            ae_object_value="1005004218144340"
                            st_page_id="cfgghnxbocawlxis183e626957011c24236917e8ab"
                            data-aplus-clk="x20_2364efb0"
                            data-spm-anchor-id="a2g0o.detail.100005.1"
                          >
                            Mag Safe-Case Store
                          </a>
                        </div>
                      </div>
                      {/* store info content */}
                      <div className={`${flexCol} space-y-2`}>
                        {/* store info contact */}
                        <div className={` text-[#000] text-[13px]`}>
                          <div
                            className={classNames(
                              `break-words whitespace-nowrap `
                            )}
                          >
                            95.2%&nbsp;
                            <span className="text-[#999] leading-[13px] inline-block text-left">
                              Positive Feedback
                            </span>
                          </div>
                          {/*  */}
                          <div
                            className={classNames(
                              `break-words whitespace-nowrap mb-1 text-[13px]`
                            )}
                          >
                            1836&nbsp;
                            <span className="text-[#999] leading-[13px] inline-block text-left">
                              Followers
                            </span>
                          </div>
                        </div>
                        {/* store info data */}
                        <div
                          className={classNames(
                            `inline-block ${flexRow} space-x-1`
                          )}
                        >
                          <div
                            className={classNames(
                              `border border-solid border-darkRed cursor-pointer bg-white w-20`,
                              `${flexCenter}`
                            )}
                          >
                            <a href="">l</a>
                            <span>Follow</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div
                  className={classNames(
                    `w-[75%] max-w-[784px] md:w-[75%] md:max-w-[784px] lg:w-[85%] lg:max-w-[984px] h-full  `,
                    `${containerWrapper}`,
                    `py-3 pr-5 pl-2`
                  )}
                >
                  <div
                    className={classNames(`${XBoxFull} ${flexRow} space-x-3`)}
                  >
                    <div className={classNames(`w-two h-full `)}>
                      <div className={classNames(`${XBoxFull} ${flexCol}`)}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div
                      className={classNames(
                        `w-eight min-w-eight max-w-eight h-full`
                      )}
                    >
                      <div className={`${XBoxFull} flex-row`}>
                        <div
                          className={classNames(`w-[25%] h-full
                        `)}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganisationLayout;
//https://picca.co/smfest2022
