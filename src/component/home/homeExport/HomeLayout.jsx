import React from "react";
import { flexLayout } from "../../../styles/bynauCustomStyles/bynauCustomStyles";
import { HomeBanner } from "../homeBanner";
import { HomeFooterLayout } from "../homefooter";
import { HomeNavbar } from "../homeNavbar";

const HomeLayout = ({ children }) => {
  const { flexRowReverse } = flexLayout;
  return (
    <>
      <div className={`${flexRowReverse}`}>
        {/* sidebar container */}
        <div className={`w-10 h-screen bg-black fixed`}>
          {/* render the sidebar component */}
          <h1 className={`text-3xl text-white font-bold font-simsun`}>helo </h1>
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
