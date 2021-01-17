import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="left__container">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="right__container">
            <Link to="/home">Home</Link>
            <div className="right__container">
              <Link to="/about">About</Link>
            </div>
            <div className="right__container">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="right__container">
              <Link to="/cart">
                <div className="basket">
                  <FaShoppingCart size="30px" />
                  <span>5</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
