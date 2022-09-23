import React from "react";
import { BannerImage } from "../../../assets/homeassets";
import { styles } from "../../../styles/bynauCustomStyles";
import {
  colorStyles,
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";

const homeBannerTop = () => {
  const { marginXlayout, bannerBTN } = styles;
  const { bgBlueDark } = colorStyles;
  const { flexRowCenter } = flexLayout;
  const { headingone, headingtwo, headingthree } = textStyles;
  return (
    <>
      <div className={` ${bgBlueDark} `}>
        <div className={`${marginXlayout}`}>
          <div className={`${flexRowCenter}   space-x-16 cursor-pointer`}>
            <div>
              <h1 className={`${headingone}`}>Trend Spotting</h1>
            </div>
            <div>
              <h1 className={`${headingtwo}`}>New arrivals</h1>
            </div>
            <div className={`max-w-two`}>
              <h3 className={`${headingthree}`}>
                Shop the lastest pickup up to 60% off
              </h3>
            </div>
            <div className={`max-h-full`}>
              <img
                src={BannerImage}
                alt=""
                className={`w-30 h-20 object-cover`}
              />
            </div>
            <div>
              <button className={`${bannerBTN}`}>Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default homeBannerTop;
