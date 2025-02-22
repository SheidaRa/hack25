// Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white p-5">
      <h1 className="text-xl font-bold">SafeExit</h1>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {/* Escape Plan Card */}
        <div
          className="bg-blue-500 text-white p-5 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/checklist")}
        >
          Escape Plan
        </div>

        {/* Resources Card */}
        <div
          className="bg-green-500 text-white p-5 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/resources")}
        >
          Resources
        </div>

        {/* Safe Map Card */}
        <div
          className="bg-yellow-500 text-white p-5 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/map")}
        >
          Safe Map
        </div>

        {/* Emergency Exit Card */}
        <div
          className="bg-red-600 text-white p-5 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/emergency")}
        >
          Emergency Exit
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
