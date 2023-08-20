import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <div>
      sidebar header
      <Outlet />
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
