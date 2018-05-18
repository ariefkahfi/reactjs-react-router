import React from "react";
import { Link } from "react-router-dom";

const NavbarStyles = {
  nav: {
    backgroundColor: "dodgerblue",
    color: "white",
    padding: "8px"
  },
  header: {
    margin: "0",
    display: "inline-block"
  },
  navContent: {
    float: "right",
    padding: "2px"
  },
  navItem: {
    margin: "0 5px",
    cursor: "pointer"
  },
  whiteLink: {
    color: "white",
    textDecoration: "none"
  }
};

export class Navbar extends React.Component {
  render() {
    return (
      <nav style={NavbarStyles.nav} className="clearfix">
        <h3 style={NavbarStyles.header}>{this.props.navTitle}</h3>
        <div style={NavbarStyles.navContent}>
          <span style={NavbarStyles.navItem}>
            <Link style={NavbarStyles.whiteLink} to="/">
              Home
            </Link>
          </span>
          <span style={NavbarStyles.navItem}>
            <Link style={NavbarStyles.whiteLink} to="/about-us">
              About us
            </Link>
          </span>
          <span style={NavbarStyles.navItem}>
            <Link style={NavbarStyles.whiteLink} to="/dashboard">
              Dashboard
            </Link>
          </span>
          <span style={NavbarStyles.navItem}>
            <Link style={NavbarStyles.whiteLink} to="/contact-us">
              Contact us
            </Link>
          </span>
        </div>
      </nav>
    );
  }
}
