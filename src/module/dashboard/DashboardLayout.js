import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="dashboard-main flex gap-6 max-w-[1600px] m-auto mt-7">
      <Sidebar></Sidebar>
      <div className="dashboard-children border-l-2 border-black pl-7">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
