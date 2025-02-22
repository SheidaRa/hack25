import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-purple-100 p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Dashboard</h1>
        <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {/* Top Row */}
        <div className="bg-purple-500 text-white p-5 rounded-lg shadow-md cursor-pointer" onClick={() => navigate("/checklist")}>Escape Plan</div>
        <div className="bg-purple-400 text-white p-5 rounded-lg shadow-md cursor-pointer" onClick={() => navigate("/resources")}>Resources</div>
        
        {/* Middle Card */}
        <div className="bg-purple-600 text-white p-5 rounded-lg shadow-md cursor-pointer col-span-2" onClick={() => navigate("/map")}>Safe Map</div>

        {/* Bottom Row */}
        <div className="bg-purple-700 text-white p-5 rounded-lg shadow-md cursor-pointer" onClick={() => navigate("/emergency")}>Emergency Exit</div>
        <div className="bg-purple-800 text-white p-5 rounded-lg shadow-md cursor-pointer" onClick={() => navigate("/profile")}>Profile</div>
      </div>
    </div>
  );
};

export default Dashboard;
