import React from "react";
import { flexLayout } from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import ProductPlus from "./ProductPlus";
import ProductPlusTop from "./productplus/ProductPlusTop";

const HomeProductPlusLayout = () => {
  const { flexCol } = flexLayout;
  return (
    <>
      <div className={`bg-white shadow-sm hover:shadow-lg p-3 rounded-lg`}>
        <div className={`${flexCol} space-y-3`}>
          <div>
            <ProductPlusTop />
          </div>
          <div>
            <ProductPlus />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductPlusLayout;
