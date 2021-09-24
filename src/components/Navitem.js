import { Link } from "react-scroll";
import React from "react";
import { NavItem } from "react-bootstrap";

function Navitem({ to, children }) {
  return (
    <NavItem>
      <Link
        className="nav-link cursor-pointer"
        activeClass="active"
        spy={true}
        to={to}
      >
        {children}
      </Link>
    </NavItem>
  );
}

export default Navitem;
