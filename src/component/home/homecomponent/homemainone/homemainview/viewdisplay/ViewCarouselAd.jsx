import React from "react";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import styles, {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { viewCarouselAdData } from "../../../../../../utils/binauData";

const ViewCarouselAd = () => {
  const { flexRow, flexCol, flexCenter, flexRowCenter, flexColBetween } =
    flexLayout;
  const { mainTextCustom } = textStyles;
  const { imageCustom } = styles;
  const { RiArrowRightSFill } = useIcon();
  return (
    <div
      className={`w-full rounded-lg bg-orange-300 h-[160px] max-h-[160px] px-2`}
    >
      <div className={`${flexRow} space-x-3`}>
        {/* content display */}
        <div
          className={`min-w-three w-three max-w-three ${flexCol} space-y-5 border-2 border-dotted border-darkRed `}
        >
          <div className={`${flexCol}`}>
            <h2
              className={`${mainTextCustom} text-md font-semibold text-white `}
            >
              {" "}
              Welcome to AliExpress
            </h2>
            <h4
              className={`max-w-nine ${mainTextCustom} text-sm font-normal text-white`}
            >
              Get items up to 70% off or get a coupon!
            </h4>
          </div>
          <div
            className={`max-w-full w-nine bg-blue-500 h-12 rounded-lg ${flexCenter}`}
          >
            <div className={`${flexRowCenter} space-x-3 cursor-pointer`}>
              <h2 className={`${mainTextCustom} text-xl`}>NGN 1200</h2>
              <div className={`${flexCenter} h-6 w-6 bg-gray-100 rounded-full`}>
                <RiArrowRightSFill className={`text-orange-500`} size={20} />
              </div>
            </div>
          </div>
        </div>
        {/* carousel PRODUCT card display */}
        <div
          className={`max-w-seven min-w-seven w-six h-[160px] max-h-[160px] border border-dotted ${flexCenter} p-4`}
        >
          <div
            className={`relative flex flex-row basis-full overflow-x-scroll scrollbar-thin overflow-y-hidden snap-proximity snap-x gap-x-2`}
          >
            {/*  animate-slide-animate will-change-transform hover:pause whitespace-nowrap */}
            {[...viewCarouselAdData]
              .sort((a, b) => a.price.localeCompare(b.price))
              .map((item) => {
                const { discount, id, image, price } = item;
                return (
                  <div
                    className={`flex-shrink-0 h-36 bg-gray-100 w-28 snap-center ${flexCenter}  rounded-lg p-2 shadow`}
                    key={id}
                  >
                    <div className={`${flexCol} h-full w-full space-y-5`}>
                      <div className={`relative min-h-six h-six max-h-six`}>
                        <img src={image} alt="" className={`${imageCustom}`} />
                        <div
                          className={`absolute ${flexCenter} bg-darkRed p-1 rounded-lg top-16 left-3`}
                        >
                          <p
                            className={`${mainTextCustom} text-white text-xss font-normal`}
                          >
                            NGN{price}
                          </p>
                        </div>
                      </div>
                      <div className={`min-h-four h-four `}>
                        <p
                          className={`${mainTextCustom} text-center text-gray-800 text-sm font-normal line-through`}
                        >
                          NGN{discount}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCarouselAd;
//
