import React from "react";

const Header = ({ onLoginClick }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-700">My virtual closet</h1>
      <div className="flex space-x-4">
        <button className="text-purple-700 font-semibold">Shop</button>
        <button className="text-purple-700 font-semibold">Resources</button>
        <button
          onClick={onLoginClick}
          className="text-purple-700 font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
