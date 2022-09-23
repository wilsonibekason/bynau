import React from "react";
import { HomeBanner } from "../homeBanner";

const HomeLayout = ({ children }) => {
  return (
    <>
      <div>
        <HomeBanner />
      </div>
      <div>{children}</div>
      <div>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default HomeLayout;
