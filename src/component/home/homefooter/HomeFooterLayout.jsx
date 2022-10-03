import React from "react";
import { styles } from "../../../styles/bynauCustomStyles";
import HomeFooterBottomDown from "./homefooterbottom/HomeFooterBottomDown";
import HomeFooterBottomUp from "./homefooterbottom/HomeFooterBottomUp";
import HomeFooterTopDown from "./homefootertop/HomeFooterTopDown";
import HomeFooterTopUp from "./homefootertop/HomeFooterTopUp";
const TopLayerFooter = () => {
  const { homeMainMX } = styles;
  return (
    <div>
      <div className={`${homeMainMX}`}>
        <HomeFooterTopUp />
      </div>
      <div className={`border border-gray-200 my-16 h-px`} />
      <div className={`my-10 ${homeMainMX}`}>
        <HomeFooterTopDown />
      </div>
    </div>
  );
};

const DownLayerFooter = () => {
  const { NavPadY } = styles;
  return (
    <>
      <div className={`w-full max-w-full`}>
        <HomeFooterBottomUp />
        <div className={`${NavPadY}`}>
          <HomeFooterBottomDown />
        </div>
      </div>
    </>
  );
};
const HomeFooterLayout = () => {
  const { NavPadX, homeMainMX } = styles;
  return (
    <>
      <div className={` `}>
        <div className={`w-full max-w-full`}>
          <div className={`w-full `}>
            <TopLayerFooter />
          </div>
          <div>
            <DownLayerFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooterLayout;
