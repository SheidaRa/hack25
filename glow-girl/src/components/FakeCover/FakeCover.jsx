import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FakeCover = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
    setError(false);
  };

  const handleCodeSubmit = () => {
    if (code === "1234") {
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-center mb-4">Trendy Fashion</h1>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white p-3 shadow rounded-lg">
            <img
              src={`https://source.unsplash.com/100x100/?clothing&sig=${item}`}
              alt="Clothing Item"
              className="w-full rounded"
            />
            <p className="mt-2 font-semibold">Stylish Outfit {item}</p>
            <p className="text-gray-500">$19.99</p>
          </div>
        ))}
      </div>
      
      {/* Login Button */}
      <button
        className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg"
        onClick={handleLoginClick}
      >
        Login
      </button>
      
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold mb-3">Enter Code</h2>
            <input
              type="password"
              className="border p-2 w-full mb-3"
              placeholder="Enter Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            {error && <p className="text-red-500">Incorrect Code!</p>}
            <button
              className="bg-blue-600 text-white py-2 w-full rounded-lg"
              onClick={handleCodeSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FakeCover;
