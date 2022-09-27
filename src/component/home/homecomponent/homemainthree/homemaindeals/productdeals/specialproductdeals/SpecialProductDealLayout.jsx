import React from "react";
import { styles } from "../../../../../../../styles/bynauCustomStyles";
import SpecialProductDealCard from "./SpecialProductDealCard";

const SpecialProductDealLayout = () => {
  const { testContainer, HorizontalScrollCustom } = styles;
  return (
    <>
      <div className={` h-60`}>
        <div className={`${HorizontalScrollCustom} h-full gap-x-2`}>
          <SpecialProductDealCard />
          <SpecialProductDealCard />
          <SpecialProductDealCard />
          <SpecialProductDealCard />
          <SpecialProductDealCard />
          <SpecialProductDealCard />
          <SpecialProductDealCard />
        </div>
      </div>
    </>
  );
};

export default SpecialProductDealLayout;
