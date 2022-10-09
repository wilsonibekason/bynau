import React from "react";
import { useIcon } from "../../../../hooks/stateContext/IconContextProvider";
import { styles } from "../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../styles/bynauCustomStyles/bynauCustomStyles";

const MainProductRightContents = () => {
  const { XBoxFull, containerWrapper, transitionLight } = styles;
  const {
    flexRow,
    flexCol,
    flexRowCenter,
    flexRowCenterBetween,
    flexColCenter,
    flexCenter,
  } = flexLayout;
  const { mainText, mainTextCustom } = textStyles;
  const {
    GrStar,
    RiArrowDropDownLine,
    BsPlus,
    HiMinus,
    RiSpaceShipLine,
    AiOutlineHeart,
    BsHeart,
    BsShieldCheck,
  } = useIcon();
  return (
    <>
      {/* <div></div> */}
      {/* poduct title */}
      <div className={`${flexCol} space-y-4`}>
        <div className={` break-all`}>
          <h1 className="text-sm w-fit">
            Original Translucent Matte For Magsafe Magnetic Wireless Charging
            Case For iPhone 14 13 12 11 Pro Plus Max Solid Hard PC Cover
          </h1>
        </div>
        {/* product selling tags  */}
        <div className={`${flexRowCenter}`}>
          <div className={`inline-block rounded  mr-4`}>
            <span className={`align-middle text-darkRed`}>
              NGN 1,301.16 off every NGN 13,011.6 spent
            </span>
          </div>
          <div
            className={`relative inline-block rounded  mr-4 ${flexRowCenter} space-x-1`}
          >
            <img
              src="https://ae01.alicdn.com/kf/H1a74367e677a43f7b4027d6354bd4765H.png"
              alt=""
              className={`w-4 h-4 align-middle`}
            />
            <span className={`align-middle text-darkRed`}>Extra 2% off</span>
          </div>
        </div>
        {/* product review */}
        <div className={`${flexRowCenter} space-x-2`}>
          <div className={`${flexRowCenter} space-x-1`}>
            <div className={`align-middle relative inline-block text-sm`}>
              <div className={`cursor-not-allowed float-left`}>
                <div className={`whitespace-nowrap overflow-hidden`}>
                  {Array(5)
                    .fill()
                    .map((i) => (
                      <span className="ml-[-2px]" key={i}>
                        <li
                          className={`transition inline-block antialiased font-normal cursor-pointer`}
                        >
                          <GrStar size={15} />
                        </li>
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <p className={`middle ${mainText} ${flexRowCenter}`}>
              4.8
              <RiArrowDropDownLine size={12} />
            </p>
          </div>
          <div>
            <p className={`${mainText}`}>88 reviews</p>
          </div>
          <div>
            <p className={`${mainText}`}>716 orders</p>
          </div>
        </div>
        {/* uniform banner */}
        <div
          style={{
            backgroundImage: `url("https://ae01.alicdn.com/kf/Hcae789ea016843a785b6ce13e275c8c9u.png")`,
          }}
          className={`rounded w-auto max-w-[550px] bg-[#ffaa9f]`}
        >
          <div className={`text-center text-sm w-full mr-1 text-[#fff3f3]`}>
            Enjoy special discount
          </div>
          <div
            style={{
              backgroundImage: `url("https://ae01.alicdn.com/kf/Hcf8a5927756e4373bf1d1b928f2d856fN.png")`,
            }}
            className={`pt-2 pr-3 min-h-[60px] max-h-[80px] overflow-hidden bg-no-repeat w-inherit  rounded ${flexRowCenterBetween} bg-[length:100%_100%] p-2`}
          >
            <div className={`${flexCol}`}>
              <h1 className={`${mainTextCustom} text-xl text-white`}>
                NGN 2,393
              </h1>
              <p
                className={`${mainTextCustom} text-white text-sm font-medium `}
              >
                <span className={`line-through`}> NGN 3000</span> -20%
              </p>
            </div>
            <div
              className={`absolute flex-col justify-center w-auto max-w-[174px] right-0 h-full text-white min-w-[110px] text-sm`}
            >
              <img
                src="https://ae01.alicdn.com/kf/H40d6759bc5ed4b0fb4ce1d780c1e871fL.png"
                alt=""
                className={`h-full m-auto block`}
              />
            </div>
          </div>
        </div>
        {/* product price */}
        <div className={`${flexCol} space-y-1.5`}>
          <div className={`${flexRowCenter}`}>
            <div className={`middle ${mainText}`}>Store Discount: </div>
            <div className={`${flexRowCenter} ${mainText}`}>
              {"  Buy 2 get 5% off"}

              <RiArrowDropDownLine />
            </div>
          </div>
          <div className={`${flexRow} space-x-1`}>
            <div
              className={`relative text-white inline-block ${mainText} h-5 ${flexCenter}`}
            >
              <div className={`p-1 mr-3 h-full bg-darkRed`}>
                NGN 1,734.88 off Orders over NGN 2,168.60
              </div>
            </div>
            <div
              className={`relative text-white inline-block ${mainText} h-5 ${flexCenter}`}
            >
              <div className={`p-1 mr-3 h-full bg-[#f90]`}>
                NGN 1,734.88 off Orders over NGN 2,168.60
              </div>
              <div
                className={`content-[""] absolute w-3 h-5 top-0 left-0 bg-contain `}
                style={{
                  backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAsCAYAAABsSzi3AAAAAXNSR0IArs4c6QAAAI1JREFUSA1j/O/u/p+BAsBEgV6w1hFtACPjPQZGxgwWMgPxIwMnpyXj+vWvyA3EVSDNIMvJNQCsmXwDGBnNYV4nzwX//7v89/JKBBnCSFFSZmS8Rp4LYO7//1+LMgOABpFvwGhCGk1IsJQ4mpDAIUFeZhotkZCS0WiJBAqM0YQ0oFUbND2SFwtIiZliAwAFzk2Ez4UCjAAAAABJRU5ErkJggg==")`,
                }}
              />
            </div>
          </div>
          {/*  */}
          <div className={`middle ${mainText} text-[#2e9cc3] capitalize`}>
            Get coupons
          </div>
        </div>
        <div className="w-full h-px bg-[#f9f9f9]" />
        {/* product Sku */}
        <div className={`${flexCol} space-y-4`}>
          {/* sku property  */}
          <div className={`${flexCol} space-y-2`}>
            {/* title */}
            <div className={`${mainText} align-middle ${flexRowCenter}`}>
              <p>Material: </p>{" "}
              <span className="text-gray-400"> For Iphone 12 Pro Max</span>
            </div>
            {/* sku collections */}
            <ul className={`${flexRow} flex-wrap list-none gap-3`}>
              {Array(10)
                .fill()
                .map((i) => (
                  <li
                    className={`transition shadow rounded  cursor-pointer  border-2 hover:border-darkRed ${transitionLight}`}
                    key={i}
                  >
                    <div
                      className={`whitespace-nowrap p-2 ${mainTextCustom} text-sm font-medium text-black h-8 ${flexCenter}`}
                    >
                      <span>For Iphone 14 Pro Max</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          {/* sku property */}
          <div className={`${flexCol} space-y-2`}>
            <div></div>
            <ul className={`${flexRow} flex-wrap list-none gap-3`}>
              {Array(10)
                .fill()
                .map((i) => (
                  <li
                    className={` ${transitionLight} rounded cursor-pointer proportional-nums border-2 hover:border-darkRed `}
                    key={i}
                  >
                    <div className={`w-14 h-14 ${flexCenter}`}>
                      <img
                        src="https://ae01.alicdn.com/kf/S4748387260744161ba5bfc760def4b03U/Original-Translucent-Matte-For-Magsafe-Magnetic-Wireless-Charging-Case-For-iPhone-14-13-12-11-Pro.jpg_50x50.jpg_.webp"
                        alt=""
                        className={`max-w-[50px] max-h-[50px]`}
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/*   product Quantity */}
        <div className={`${flexCol}`}>
          {/* <div></div> */}
          <div className={`${flexRowCenter} space-x-4`}>
            <span className={`w-20 float-left `}>
              <div
                className={`inline-table border-separate border-spacing-0 w-full ${flexRowCenter}`}
              >
                <span
                  className={`w-px table-cell  align-middle whitespace-nowrap`}
                >
                  <button
                    className={`rounded-full bg-bgcolor w-6 h-6 ${flexCenter}`}
                  >
                    <li
                      className={`inline-block font-medium antialiased normal-case text-gray-400`}
                    >
                      <HiMinus size={15} />
                    </li>
                  </button>
                </span>
                {/*  */}
                <span
                  className={`h-10 
                 `}
                >
                  <input
                    type={"text"}
                    aria-valuemax={9901}
                    aria-valuemin={1}
                    autoComplete={"off"}
                    value={1}
                    className={`align-middle p-0 m-0 text-center  outline-none border-none text-black bg-transparent w-full`}
                  />
                </span>
                {/*  */}
                <span
                  className={`w-px table-cell align-middle whitespace-nowrap`}
                >
                  <button
                    className={`rounded-full bg-bgcolor w-6 h-6 ${flexCenter}`}
                  >
                    <li
                      className={`inline-block font-medium antialiased normal-case text-gray-600`}
                    >
                      <BsPlus size={20} />
                    </li>
                  </button>
                </span>
              </div>
            </span>
            {/*  */}
            <div className={`${flexCol} space-y-1.5 h-9 mt-3`}>
              <div className={`${mainText} text-[#999]`}>
                {" "}
                Additional 10% off (10 Pieces or more)
              </div>
              <div className={`${mainText} text-[#999]`}>
                9982 Pieces available
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={`${flexRowCenter} space-x-1`}>
          <span className={`${mainText} cursor-pointer`}>Ships to</span>
          <span
            className={`inline-block bg-inherit font-normal text-center align-[-0.125em] antialiased `}
          >
            <RiSpaceShipLine size={12} />
          </span>
          <span className={`${mainText} cursor-pointer`}>Nigeria</span>
        </div>
        {/* product action */}
        <div className={`${flexRowCenter} space-x-3`}>
          <span
            className={`min-w-[165px] text-white bg-darkRed border border-solid border-transparent rounded h-11 ${mainTextCustom} ${flexCenter} `}
            style={{
              backgroundImage: `linear-gradient(213deg,#ff7b48 7%,#f73c22 92%)`,
            }}
          >
            <button className={`text-lg font-medium text-ellipsis`}>
              Buy Now
            </button>
          </span>
          <span
            className={`min-w-[165px] text-white bg-darkRed border border-solid border-transparent rounded h-11 ${mainTextCustom} ${flexCenter} `}
            style={{
              backgroundImage: `linear-gradient(239deg,#ffac2d 7%,#ff8219)`,
            }}
          >
            <button className={`text-lg font-medium text-ellipsis`}>
              Add to Cart
            </button>
          </span>

          <span
            className={`h-11 p-4 border border-[#e8e8e8] leading-10 cursor-pointer rounded`}
          >
            <div className={`h-full ${flexRowCenter} space-x-2`}>
              <div className={`font-extralight`}>
                <BsHeart size={15} />
              </div>
              <div className={`${mainTextCustom} font-light text-sm `}>129</div>
            </div>
          </span>
        </div>
        {/* product protection */}
        <div className={`h-14 ${flexRow} space-x-2`}>
          <div>
            <BsShieldCheck size={15} />
          </div>
          <div className={` ${flexCol} space-y-2`}>
            <span className={`${mainText} text-black`}>
              75-Day Buyer Protection
            </span>
            <span className={`${mainText} `}>Money back guarantee</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProductRightContents;
