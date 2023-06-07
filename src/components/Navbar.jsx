import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  //    console.log(useSelector((store) => store))
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Tech Talk</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 


// for the icons , am using hericons