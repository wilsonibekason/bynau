import React from "react";
import { styles } from "../../../../../styles/bynauCustomStyles";
import {
  flexLayout,
  textStyles,
} from "../../../../../styles/bynauCustomStyles/bynauCustomStyles";
import ProductDealTop from "./productdeals/ProductDealTop";
import SpecialProductDealLayout from "./productdeals/specialproductdeals/SpecialProductDealLayout";

const ProductDealslayout = () => {
  const { testContainer } = styles;
  const { flexCol } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={`bg-white shadow-lg hover:shadow-2xl p-3 rounded-lg`}>
        <div className={`${flexCol} space-y-3`}>
          <div>
            <ProductDealTop />
          </div>
          <div>
            <SpecialProductDealLayout />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDealslayout;
