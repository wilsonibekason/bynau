import React from "react";
import { HomeMainView } from "../../component/home/homecomponent/homemainone";
import { HomeLayout } from "../../component/home/homeExport";

const AppHomeExport = () => {
  return (
    <>
      <div>
        <div className={`bg-bgcolor `}>
          {/* main layout components 1 */}
          <div className={`ml-40 mr-4`}>
            <HomeMainView />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHomeExport;
