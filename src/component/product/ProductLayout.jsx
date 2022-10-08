import React from "react";
import { HomeBannerBottom } from "../home/homeBanner";
import ProductMainBanner from "./mainbanner/ProductMainBanner";
import ProductNavbar from "./mainbanner/productnavbar/ProductNavbar";

const ProductLayout = (props) => {
  return (
    <>
      <div className={``}>
        <div className={`w-full max-w-full`}>
          <div className={`w-full`}>
            <ProductMainBanner />
          </div>
          <div>
            <ProductNavbar />
          </div>
          {/* children */}
          <div>{props.children}</div>
          {/* product footer */}
          <div>
            <h1>
              <h1>ProductFooter</h1>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
