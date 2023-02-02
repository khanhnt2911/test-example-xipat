import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLineChart = () => {
    navigate("/dashboard/subcription");
  };

  const handleClickColumnChart = () => {
    navigate("/dashboard/evenue");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h3 className="dashboard-title">Dashboard</h3>
        <button className="btn mr-3" onClick={handleLineChart}>
          Subcription
        </button>
        <button className="btn" onClick={handleClickColumnChart}>
          Revenue
        </button>
      </div>
      <div className="dashboard-content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardPage;
