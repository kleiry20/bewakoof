import React, { useState } from "react";
import "./Header.css";

const Header = (props: any) => {
  return (
    <header className="header">
      {props.isOffer == true ? (
        <div className="offer">
          <p className="offer-text">Flat 10% off on your first order</p>
        </div>
      ) : null}

      <div className="navbar">
        <div className="navbar--left">
          <img
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
            alt="bewakoof"
            style={{ width: "10rem" }}
          />
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Accessories</a>
        </div>

        <div className="navbar--right">
          <div>search bar</div>
          <a href="">Account</a>
          <a href="">Wishlist</a>
          <a href="">Cart</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
