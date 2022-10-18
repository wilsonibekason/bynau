import React from "react";
import { ProductLayout } from "../../component/product";
import MainProductDisplayLayout from "../../component/product/productmaindisplay/MainProductDisplayLayout";
import { OrganisationLayout } from "../../component/product/productmaindisplay/organisation";
import { styles } from "../../styles/bynauCustomStyles";

const ItemDetail = () => {
  const { marginXlayout, marginYlayout } = styles;
  return (
    <div>
      <ProductLayout>
        <div className={`${marginXlayout}`}>
          <MainProductDisplayLayout />
        </div>
        {/* companies container */}
        <div className={`bg-bgcolor`}>
          <div className={`${marginXlayout} ${marginYlayout}`}>
            <OrganisationLayout />
          </div>
        </div>
        <div className={`flex-shrink-0`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea
          possimus iure, mollitia itaque quasi quae nemo quos accusamus ab
          voluptatum aperiam laudantium nulla ratione odit doloremque, sed vero!
          Adipisci!
        </div>
      </ProductLayout>
    </div>
  );
};

export default ItemDetail;
