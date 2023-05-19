import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeTabsPanel from "./homeTabsPanel";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeTabsPanel />} />
    </Routes>
  );
};

export default Home;
