import React, { useState } from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import SideBar from "../SideBar/SideBar";

const Header = (props: any) => {
  return (
    <>
      <SideBar />
      <header className="header desktop-view">
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
            <div>
              <SearchBar />{" "}
            </div>
            <a href="">
              {" "}
              <i className="fas fa-user"></i> Account
            </a>
            <a href="">
              {" "}
              <i className="fas fa-heart"></i> Wishlist
            </a>
            <a href="">
              {" "}
              <i className="fas fa-bag-shopping"></i> Cart
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
