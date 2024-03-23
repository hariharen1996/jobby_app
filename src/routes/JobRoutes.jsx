import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Base from "../pages/Base/Base";

const JobRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default JobRoutes;
