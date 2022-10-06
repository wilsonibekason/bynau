import React from "react";
import { useIcon } from "../../../hooks/stateContext/IconContextProvider";
import styles, {
  colorStyles,
  flexLayout,
  hoverStyles,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";

const ProductMainBanner = () => {
  const { flexRowCenterBetween, flexRowCenter } = flexLayout;
  const { borderAroundLight, marginXlayout, transition, borderR } = styles;
  const { mainText } = textStyles;
  const { bgDarkWhite, GrayNormal } = colorStyles;
  const { redTextGroup } = hoverStyles;
  const { BiDownArrow, AiOutlineHeart, MdOutlinePerson, BsPhone, GiUsaFlag } =
    useIcon();
  return (
    <>
      <div className={`${bgDarkWhite} ${borderAroundLight} py-2`}>
        <div className={`${flexRowCenterBetween} ${marginXlayout}`}>
          <div></div>
          <div className={` ${flexRowCenter} space-x-3`}>
            <div className={`${flexRowCenter} space-x-1`}>
              <p className={`${mainText}`}>Sell on Aliexpress</p>
              <BiDownArrow className={`${GrayNormal}`} size={10} />
            </div>
            {/* border */}
            <div className={`${borderR}`} />
            <div className={`${flexRowCenter} space-x-1`}>
              <p className={`${mainText}`}>Help</p>
              <BiDownArrow className={`${GrayNormal}`} size={10} />
            </div>
            <div>
              <p className={`${mainText}`}>Buyer Protection</p>
            </div>
            <div className={`${flexRowCenter} space-x-1`}>
              <p className={`${mainText}`}>Phone</p>
              <BsPhone className={`${GrayNormal}`} size={10} />
            </div>
            <div className={`${flexRowCenter} space-x-1 group`}>
              <GiUsaFlag
                className={`${redTextGroup} ${transition}`}
                size={15}
              />
              <p className={`${mainText} ${redTextGroup} ${transition}`}>/</p>
              <p className={`${mainText} ${redTextGroup}  ${transition}`}>
                English
              </p>
              <p className={`${mainText} ${redTextGroup}  ${transition}`}>/</p>
              <p
                className={`${mainText} uppercase ${redTextGroup}  ${transition}`}
              >
                NGN
              </p>
              <BiDownArrow
                className={`${GrayNormal}  ${transition} ${redTextGroup}`}
                size={10}
              />
            </div>
            <div className={`${borderR}`} />
            <div className={`${flexRowCenter} space-x-1`}>
              <AiOutlineHeart
                className={`${GrayNormal}  ${transition} ${redTextGroup}`}
                size={15}
              />
              <p className={`${mainText} capitalize`}> Wish List</p>
            </div>
            <div className={`${borderR}`} />
            <div className={`${flexRowCenter} space-x-4`}>
              <div className={`${flexRowCenter} space-x-1`}>
                <MdOutlinePerson
                  className={`${GrayNormal}  ${transition} ${redTextGroup}`}
                  size={15}
                />
                <p className={`${mainText} capitalize`}> account</p>
              </div>
              <BiDownArrow className={`${GrayNormal}`} size={10} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductMainBanner;
