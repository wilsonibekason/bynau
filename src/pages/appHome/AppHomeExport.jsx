import React, { useLayoutEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { FeaturedCategoriesLayout } from "../../component/home/homecomponent/featuredcomponent";
import { HomeMainView } from "../../component/home/homecomponent/homemainone";
import { HomeProductLayout } from "../../component/home/homecomponent/homemainproducts";
import { ProductDealslayout } from "../../component/home/homecomponent/homemainthree";
import { ProductPlusLayout } from "../../component/home/homecomponent/homemaintwo";
import { HomeLayout } from "../../component/home/homeExport";
import { AuthModal } from "../../component/modals";
import { useIcon } from "../../hooks/stateContext/IconContextProvider";
import { flexLayout } from "../../styles/bynauCustomStyles/bynauCustomStyles";

const AppHomeExport = () => {
  useLayoutEffect(() => {
    <AuthModal />;
  }, []);
  const { flexCenter } = flexLayout;
  const { onAuthModal } = useIcon();
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
              <div className={`my-5`}>
                <ProductPlusLayout />
              </div>
              <FeaturedCategoriesLayout />
              <div>
                <HomeProductLayout />
              </div>
            </div>
          </div>
        </div>
        {onAuthModal && <AuthModal />} ;
        <ScrollToTop
          smooth
          viewBox="0 0 24 24"
          svgPath="M18 15l-6-6-6 6"
          className={`${flexCenter}`}
        />
      </div>
    </>
  );
};

export default AppHomeExport;
