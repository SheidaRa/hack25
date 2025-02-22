import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const CartBtn = () => {
  // We get a state of addItems
  // Write the name of the file not the function
  // const state = useSelector((state)=> state.addItem)
  const [state, setState] = useState([]);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
