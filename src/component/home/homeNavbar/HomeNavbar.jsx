import React from "react";
import styles, {
  flexLayout,
  textStyles,
} from "../../../styles/bynauCustomStyles/bynauCustomStyles";
import HomeNavbarBottom from "./HomeNavbarBottom";
import HomeNavbarTop from "./HomeNavbarTop";
const HomeNavbar = () => {
  const { flexCenter, flexCol } = flexLayout;
  const { NavPadX, NavPadY } = styles;
  const {} = textStyles;
  return (
    <>
      <div>
        <div className={`${NavPadX} ${NavPadY} `}>
          <div className={`${flexCol} -space-y-2`}>
            <div>
              <HomeNavbarTop />
            </div>
            <div className={`${flexCenter}`}>
              <HomeNavbarBottom />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;
