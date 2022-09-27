import React from "react";
import { HomeMainView } from "../../component/home/homecomponent/homemainone";
import { ProductDealslayout } from "../../component/home/homecomponent/homemainthree";
import { ProductPlusLayout } from "../../component/home/homecomponent/homemaintwo";
import { HomeLayout } from "../../component/home/homeExport";

const AppHomeExport = () => {
  return (
    <>
      <div>
        <div className={`bg-bgcolor `}>
          {/* main layout components 1 */}
          <div className={`ml-40 mr-8`}>
            <div className={`w-full min-w-full`}>
              <HomeMainView />
            </div>
            <div className={`mr-8`}>
              <ProductDealslayout />
              <div className={`my-10`}>
                <ProductPlusLayout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHomeExport;
