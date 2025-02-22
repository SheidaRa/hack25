import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-white sticky top-0 z-1">
        <div className="container">
          <nav className="flex justify-between py-4">
            <span>Your virtual closet</span>
            <ul className="inline-flex gap-4">
              <li>shop</li>
              <li>resources</li>
              <li>security</li>
              <li>
                <Link to="/login">log in</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
