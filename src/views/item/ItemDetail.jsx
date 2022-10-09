import React from "react";
import { ProductLayout } from "../../component/product";
import MainProductDisplayLayout from "../../component/product/productmaindisplay/MainProductDisplayLayout";

const ItemDetail = () => {
  return (
    <div>
      <ProductLayout>
        <div>
          <MainProductDisplayLayout />
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
