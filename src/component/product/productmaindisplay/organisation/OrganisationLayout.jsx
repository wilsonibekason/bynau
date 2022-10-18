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
  const {
    flexCol,
    flexColCenter,
    flexBetween,
    flexRow,
    flexCenter,
    flexStart,
  } = flexLayout;
  const { mainTextCustom, mainText, mainText2 } = textStyles;
  const { MdOutlineArrowRight, BiPlus, AiOutlineMessage } = useIcon();
  return (
    <>
      <div className={`${XBoxFull}`}>
        <div
          className={classNames(
            "h-[250px] ",
            ` w-tablet md:w-tablet lg:w-laptop`,
            `${flexCol}`
          )}
        >
          <div className={classNames(`${flexCol} ${boxFull} space-y-3`)}>
            {/* header top */}
            <div
              className={`h-[70px] border-0 bg-white p-0 shadow-sm rounded-xl`}
            >
              <div className={classNames(`${YBoxFull} ${flexCenter}`)}>
                <h1
                  className={`${mainTextCustom} text-2xl text-ellipsis font-semibold overflow-hidden`}
                >
                  Store Name
                </h1>
              </div>
            </div>
            {/* header content */}
            <div className={classNames(`h-[200px] `)}>
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
                              `break-words whitespace-nowrap  text-[13px]`
                            )}
                          >
                            1836&nbsp;
                            <span className="text-[#999] leading-[13px] inline-block text-left">
                              Followers
                            </span>
                          </div>
                        </div>
                        {/* store contact info */}
                        <div
                          className={classNames(
                            `inline-block ${flexRow} items-center space-x-1`
                          )}
                        >
                          <a href="">
                            <span className={classNames(`text-lemonBlueDark`)}>
                              <AiOutlineMessage />
                            </span>
                          </a>
                          {/*  */}
                          <div
                            className={`h-4 whitespace-nowrap ${flexCenter}`}
                          >
                            <p
                              className={`${mainText} antialiased break-words text-lemonBlueDark`}
                            >
                              Contact
                            </p>
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
                              `border border-solid border-darkRed cursor-pointer bg-white min-w-[86px] w-fit h-6 `,
                              `${flexCenter} rounded-3xl cursor-pointer `,
                              ` ${flexRow} space-x-1`
                            )}
                          >
                            <a
                              href=""
                              className={classNames(
                                `inline-block font-light subpixel-antialiased decoration-slice transform-none`
                              )}
                            >
                              <BiPlus size={10} className={`text-darkRed`} />
                            </a>
                            <span
                              className={classNames(`${mainText} text-darkRed`)}
                            >
                              Follow
                            </span>
                          </div>
                          <div
                            className={classNames(
                              `border border-solid bg-darkRed cursor-pointer text-white min-w-[86px] w-fit h-6 `,
                              `${flexCenter} rounded-3xl cursor-pointer `
                            )}
                          >
                            <span
                              className={classNames(`${mainText} text-white`)}
                            >
                              Visit Store
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={classNames(
                        `${flexStart} items-center pt-4  flex-row gap-x-4`
                      )}
                    >
                      {/* card ELement */}
                      {Array(6)
                        .fill()
                        .map((i) => (
                          <div
                            className={`w-[108px] text-center  relative flex-shrink-0 whitespace-nowrap`}
                            key={i}
                          >
                            <div
                              className={classNames(
                                `w-[108px] h-[108px] rounded overflow-hidden relative `
                              )}
                            >
                              <a
                                href="//www.aliexpress.com/item/1005004218144340.html?gps-id=pcDetailBottomMoreThisSeller&amp;scm=1007.13339.291025.0&amp;scm_id=1007.13339.291025.0&amp;scm-url=1007.13339.291025.0&amp;pvid=aad9c9e1-dbb8-42d3-a870-3a4f5d901fec&amp;_t=gps-id:pcDetailBottomMoreThisSeller,scm-url:1007.13339.291025.0,pvid:aad9c9e1-dbb8-42d3-a870-3a4f5d901fec,tpp_buckets:668%232846%238112%231997&amp;pdp_ext_f=%7B%22sku_id%22%3A%2212000028415997694%22%2C%22sceneId%22%3A%223339%22%7D&amp;pdp_npi=2%40dis%21NGN%212702.57%212135.9%21%21%21%21%21%40210312cf16661089689853357e9ee8%2112000028415997694%21rec"
                                className="text-lemonBlueDark"
                              >
                                <img
                                  className={classNames(
                                    `translate-x-[-50%] -translate-y-[50%] max-w-full max-h-full top-1/2 left-1/2 absolute`
                                  )}
                                  src="//ae01.alicdn.com/kf/S84ecba6589484be6803be302c1244e11t/Original-For-Magsafe-Magnetic-Wireless-Charging-Case-For-iPhone-13-12-11-Pro-Max-Metal-Lens.jpg_480x480q90.jpg_.webp"
                                  alt="Original For Magsafe Magnetic Wireless Charging Case For iPhone 13 12 11 Pro Max Metal Lens Ring Shockproof Clear Acrylic Cover"
                                />
                              </a>
                            </div>
                            <div
                              className={`w-full ${mainText} font-bold text-ellipsis whitespace-nowrap antialiased overflow-hidden mt-2 mb-4`}
                            >
                              NGN 2,000
                            </div>
                          </div>
                        ))}
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
