import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";

const Base = () => {
  return (
    <>
      <div className="w-full">
        <Navigation />
      </div>
      <Outlet />
    </>
  );
};

export default Base;
