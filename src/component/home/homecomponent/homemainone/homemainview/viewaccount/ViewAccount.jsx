import React from "react";
import { profile } from "../../../../../../assets/homeassets";
import { useIcon } from "../../../../../../hooks/stateContext/IconContextProvider";
import { styles } from "../../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import { viewCarouselAdData } from "../../../../../../utils/binauData";
const ViewAccountCarousel = ({ price, image }) => {
  const { mainText } = textStyles;
  const {} = styles;
  const { flexCenter } = flexLayout;
  return (
    <>
      <div
        className={`flex-shrink-0 w-1/2 h-full max-h-full snap-center bg-white relative rounded-lg`}
      >
        <img
          src={image}
          alt=""
          className={`w-full max-w-full h-full object-cover rounded-lg`}
        />
        {/*  */}
        <div
          className={`absolute ${flexCenter} bottom-1 left-1 bg-darkRed rounded-lg py-1 px-6`}
        >
          <p className={`${mainText} text-white`}>NGN{price}</p>
        </div>
      </div>
    </>
  );
};
const ViewAccount = () => {
  const { buttonCustom, boxFull, testContainer, HorizontalScrollMain } = styles;
  const { CgProfile } = useIcon();
  const { flexCenter, flexCol, flexColCenter, flexRowCenter, flexColBetween } =
    flexLayout;
  const { mainTextCustom } = textStyles;
  return (
    <>
      <div
        className={`shadow-lg rounded-lg bg-gradient-to-r from-indigo-200 via-white to-gray-300 pt-4 mt-8`}
      >
        <div className={`${flexCol} space-y-6`}>
          <div className={`${flexColCenter} space-y-3`}>
            <div>
              <img src={profile} alt="" className={`w-12`} />
            </div>
            <div>
              <h3
                className={`${mainTextCustom} text-gray-700 text-sm font-semibold capitalize`}
              >
                welcome to Aliexpress
              </h3>
            </div>
            <div className={`${flexRowCenter} space-x-5 `}>
              <button
                className={`px-4 py-1.5 rounded-2xl shadow ${mainTextCustom} text-gray-50  font-semibold bg-darkRed text-sm `}
              >
                Register
              </button>
              <button
                className={`${buttonCustom} py-1.5 px-4 rounded-2xl bg-gray-200 `}
              >
                Sign In
              </button>
            </div>
          </div>
          {/*  */}
          <div className={`${flexCol} p-3 `}>
            <div
              className={` border bg-gradient-to-r from-orange-300 to-blue-400 h-60 rounded-xl relative`}
            >
              <div
                className={` absolute top-0 py-2   ${boxFull} ${flexColBetween} z-50`}
              >
                <div className={`${flexColCenter}`}>
                  <h3
                    className={`${mainTextCustom} text-sm font-normal  text-white`}
                  >
                    Wonderful offers
                  </h3>
                  <p
                    className={`${mainTextCustom} text-md font-semibold   text-white`}
                  >
                    just for our arrivals
                  </p>
                </div>
                <div
                  className={`${testContainer} w-full h-28 max-h-40 p-1 ${flexCenter}`}
                >
                  {/* small caorusel effect */}
                  <div
                    className={`max-w-nine min-w-nine w-nine min-h-eight h-eight max-h-eight `}
                  >
                    <div className={`${`${HorizontalScrollMain} h-full  `}`}>
                      {/* component card */}
                      {viewCarouselAdData.map((item) => (
                        <ViewAccountCarousel {...item} key={item.id} />
                      ))}
                    </div>
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

export default ViewAccount;
