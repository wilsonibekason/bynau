import React from "react";
import {
  flexLayout,
  gridLayout,
} from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import ViewAccount from "./viewaccount/ViewAccount";
import ViewCategory from "./viewcategory/ViewCategory";
import ViewDisplay from "./viewdisplay/ViewDisplay";

const HomeMainView = () => {
  const {
    flexMainChildOne,
    flexMainChildThree,
    flexMainChildTwo,
    flexMainLayoutOne,
  } = flexLayout;
  return (
    <>
      <div className={`container py-4`}>
        <div className={`${flexMainLayoutOne}`}>
          <div className={`${flexMainChildOne}`}>
            <ViewCategory />
          </div>
          <div className={`${flexMainChildTwo}`}>
            <ViewDisplay />
          </div>
          <div className={`${flexMainChildThree}`}>
            <ViewAccount />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainView;
