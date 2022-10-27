import React from "react";
import { flexLayout } from "../../../styles/bynauCustomStyles/bynauCustomStyles";
import { HomeBanner } from "../homeBanner";
import { HomeFooterLayout } from "../homefooter";
import { HomeNavbar } from "../homeNavbar";
import HomeSidebar from "../homesidebar/HomeSidebar";

const HomeLayout = ({ children }) => {
  const { flexRowReverse } = flexLayout;
  return (
    <>
      <div className={`${flexRowReverse}`}>
        {/* sidebar container */}
        <div className={`w-10 h-screen bg-darkRed fixed`}>
          {/* render the sidebar component */}
          <HomeSidebar />
        </div>
        <div>
          <HomeBanner />
          <HomeNavbar />
          <div>{children}</div>
          <div>
            <footer className={``}>
              <HomeFooterLayout />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
