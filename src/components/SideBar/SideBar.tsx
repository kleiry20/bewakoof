import { useState } from "react";
import { Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "/src/assets/logo.svg";

import "./SideBar.css";

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        className="mobile-view"
        style={{
          backgroundColor: "#ffc303",
          display: "flex",
          gap: "2rem",
          padding: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <i onClick={handleShow} className="fas fa-bars mt-1"></i>
          <a href="">
            <img
              src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
              alt="bewakoof"
              style={{ width: "7rem" }}
            />
          </a>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a href="">
            {" "}
            <i className="fas fa-user"></i>
          </a>
          <a href="">
            {" "}
            <i className="fas fa-heart"></i>
          </a>
          <a href="">
            {" "}
            <i className="fas fa-bag-shopping"></i>
          </a>
        </div>
        {/* <Container>
          <i onClick={handleShow} className="fas fa-bars"></i>
          <Navbar.Brand href="#home">
            <img
              src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
              alt="bewakoof"
              style={{ width: "7rem" }}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Link</Nav.Link>
            <Nav.Link href="#pricing">Actions</Nav.Link>
          </Nav>
        </Container> */}
      </Navbar>

      <Offcanvas className="only-mobile" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="bewakoof" style={{ width: "10rem" }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="sidebar">
            <li>Men</li>
            <li>Women</li>
            <li>Accessories</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
