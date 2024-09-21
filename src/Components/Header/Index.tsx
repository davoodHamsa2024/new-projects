import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.scss";

const Index = (props: any) => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#563d7c" }}>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <div style={{ display: "flex" }}>
          <Nav className="mr-auto">
            <Nav.Link className="active" style={{ color: "#fff" }}>
              {props.title}
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }}>{props.title2}</Nav.Link>
            <Nav.Link disabled style={{ color: "#fff" }}>
              {props.title3}
            </Nav.Link>
          </Nav>
        </div>
        <Nav.Link style={{ color: "#fff" }}>{props.title2}</Nav.Link>
      </div>
    </Navbar>
  );
};

export default Index;
