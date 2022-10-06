import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { ItemDetail } from "./views/item";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </>
  );
};

export default App;
