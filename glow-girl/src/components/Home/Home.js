import React from "react";
import { Routes, Route } from "react-router-dom";
import FakeCover from "../FakeCover/FakeCover";
import Dashboard from "../Dashboard/Dashboard";
import CategoryPage from "../CategoryPage/CategoryPage";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<FakeCover />} />
      <Route path="/dashboard" element={<Categories />} />
    </Routes>
  );
};

export default Home;
