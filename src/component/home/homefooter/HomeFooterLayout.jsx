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
      <div>
        <HomeFooterBottomUp />
        <div>
          <HomeFooterBottomDown />
        </div>
      </div>
    </>
  );
};
const HomeFooterLayout = () => {
  const { NavPadX, NavPadY } = styles;
  return (
    <>
      <div className={`${NavPadX} `}>
        <div className={`w-full max-w-full`}>
          <div>
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
