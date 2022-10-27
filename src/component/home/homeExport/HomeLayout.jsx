import React from "react";
import { flexLayout } from "../../../styles/bynauCustomStyles/bynauCustomStyles";
import { HomeBanner } from "../homeBanner";
import { HomeFooterLayout } from "../homefooter";
import { HomeNavbar } from "../homeNavbar";
import HomeSidebar from "../homesidebar/HomeSidebar";
import NotResponsive from "./NotResponsive";

const HomeLayout = ({ children }) => {
  const { flexRowReverse } = flexLayout;
  return (
    <>
      <NotResponsive />
      <div className={`${flexRowReverse} hidden md:hidden lg:flex xl:flex`}>
        {/* sidebar container */}
        <div className={`w-10 h-screen bg-darkRed fixed`}>
          {/* render the sidebar component */}
          <HomeSidebar />
        </div>
        <div>
          <HomeBanner />
          <HomeNavbar />
          <div className=" max-w-[1500px] mx-auto">{children}</div>
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
