import React from "react";
import { HomeLayout } from "../../component/home/homeExport";
import { AppHomeExport } from "../../pages/appHome";

const Home = () => {
  return (
    <HomeLayout>
      <AppHomeExport />
    </HomeLayout>
  );
};

export default Home;
