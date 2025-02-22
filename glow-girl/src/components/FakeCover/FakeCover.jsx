// FakeCover.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FakeCover = () => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleUnlock = () => {
    setClickCount(clickCount + 1);
    if (clickCount >= 2) { // Unlock after 3 clicks
      navigate("/dashboard");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Notes</h1>
        <p className="text-gray-500">Your saved notes appear here.</p>
        
        {/* Hidden Unlock Button */}
        <button
          className="absolute bottom-5 right-5 opacity-0"
          onClick={handleUnlock}
        >
          Unlock
        </button>
      </div>
    </div>
  );
};

export default FakeCover;
