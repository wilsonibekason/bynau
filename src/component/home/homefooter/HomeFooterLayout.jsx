import React from "react";
import { styles } from "../../../styles/bynauCustomStyles";
import HomeFooterBottomDown from "./homefooterbottom/HomeFooterBottomDown";
import HomeFooterBottomUp from "./homefooterbottom/HomeFooterBottomUp";
import HomeFooterTopDown from "./homefootertop/HomeFooterTopDown";
import HomeFooterTopUp from "./homefootertop/HomeFooterTopUp";
const TopLayerFooter = () => {
  return (
    <div>
      <HomeFooterTopUp />
      <div>
        <HomeFooterTopDown />
      </div>
    </div>
  );
};

const DownLayerFooter = () => {
  return (
    <>
      <div className={`w-full max-w-full`}>
        <HomeFooterBottomUp />
        <div>
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
      <div className={`${homeMainMX} `}>
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
